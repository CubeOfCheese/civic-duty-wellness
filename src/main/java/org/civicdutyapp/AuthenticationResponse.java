package org.civicdutyapp;

public class AuthenticationResponse {

    private final String jwt;
    private final Long userId;

    public AuthenticationResponse(User user, String jwt) {
        this.userId = user.getUserID();
        this.jwt = jwt;
    }

    public Long getUserId() {
        return userId;
    }
    public String getJwt() {
        return jwt;
    }
}
