package org.civicdutyapp.service;

import java.util.List;

import org.civicdutyapp.User;

public interface UserService {

    public List<User> auth(String name, String password);

    public List<User> getUsers();
}
