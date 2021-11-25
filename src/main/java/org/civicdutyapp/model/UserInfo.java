package org.civicdutyapp.model;

import java.util.ArrayList;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.PreparedStatement;

@Service
public class UserInfo implements UserDetailsService {

    @Autowired
    private DataSource dataSource;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        User u = userDB(email);
        return new org.springframework.security.core.userdetails.User(u.getEmail(), u.getPassword(), new ArrayList<>());
    }

    private User userDB(String email) {
        User u = null;

        try (Connection dbConnection = dataSource.getConnection()) {

            PreparedStatement check = dbConnection.prepareStatement("SELECT * FROM civic_duty_user WHERE email = ?");
            check.setString(1, email);
            ResultSet result = check.executeQuery();

            while (result.next()) {
                u = new User(result.getString("email"), result.getString("password"));
            }
            return u;
        } catch (Exception ex) {
            ex.printStackTrace();
            return null;
        }

    }

}