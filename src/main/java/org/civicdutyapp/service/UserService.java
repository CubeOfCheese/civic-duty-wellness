package org.civicdutyapp.service;

import org.civicdutyapp.model.User;

public interface UserService {

    public User auth(String email, String password);
}
