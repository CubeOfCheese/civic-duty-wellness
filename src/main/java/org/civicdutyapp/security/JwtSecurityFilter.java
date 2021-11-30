package org.civicdutyapp.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;

import org.civicdutyapp.model.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JwtSecurityFilter extends OncePerRequestFilter {

    @Autowired
    private UserInfo userDetailsInfo;

    @Autowired
    private CONSTANT config;

    private static final String AUTHORIZATION_HEADER_PREFIX = "Bearer ";

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith(AUTHORIZATION_HEADER_PREFIX)) {
            String authToken = authHeader.replaceFirst(AUTHORIZATION_HEADER_PREFIX, "");

            try {

                Algorithm algoHMAC = Algorithm.HMAC256(config.getSignatureKey());

                JWTVerifier verifier = JWT.require(algoHMAC).withIssuer(config.getIssue())
                        .withAudience(config.getAudience()).build();

                DecodedJWT jwt = verifier.verify(authToken);

                if (SecurityContextHolder.getContext().getAuthentication() == null) {
                    UserDetails userDetails = userDetailsInfo.loadUserByUsername(jwt.getSubject());
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                            userDetails, null, userDetails.getAuthorities());

                    usernamePasswordAuthenticationToken
                            .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                }

            } catch (JWTVerificationException e) {
                System.err.println("JWT has Expired or has been modified. " + e.getMessage());
            }
        }

        filterChain.doFilter(request, response);
    }

}



