package org.civicdutyapp.security;

import java.util.Date;
import java.util.concurrent.TimeUnit;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JWTUtility {

    @Autowired
    private CONSTANT config;

    Date date = new Date();
    Date iat;
    Date expDate;


    private String jwtToken;

    public String createToken(String userEmail) throws Exception {
        initializeDate();

        try {
            Algorithm algoHS = Algorithm.HMAC256(config.getSignatureKey());

            jwtToken = JWT.create().withIssuedAt(iat).withExpiresAt(expDate).withIssuer(config.getIssue()).withAudience(config.getAudience())
                    .withSubject(userEmail).sign(algoHS);
        } catch (Exception e) {
            throw new Exception("Could not be Created. \n" + e.getMessage());
        }
        return jwtToken;
    }

    private void initializeDate() {
        date = new Date();
        iat = new Date(System.currentTimeMillis());
        expDate = new Date(System.currentTimeMillis() + TimeUnit.MINUTES.toMillis(15));
    }
}
