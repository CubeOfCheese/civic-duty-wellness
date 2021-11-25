package org.civicdutyapp.service.implementation;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;

import javax.sql.DataSource;

import org.civicdutyapp.model.User;
import org.civicdutyapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private DataSource dataSource;

    @Override
    public User auth(String email, String password) {
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
