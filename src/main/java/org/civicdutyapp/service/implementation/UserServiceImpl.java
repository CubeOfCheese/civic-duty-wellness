package org.civicdutyapp.service.implementation;

import java.util.List;

import org.civicdutyapp.User;
import org.civicdutyapp.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Override
    public List<User> auth(String name, String password) {
        // Compare this information (name and password) with information from the
        // database.
        /*
         * if(user.getName.equal(name) && user.getPassword.equals(password)){
         * 
         * }
         */
        return null;
    }

    @Override
    public List<User> getUsers() {
        // Fetch all the users from the database.
        return null;
    }

}
