package org.civicdutyapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Service
public class CDUserDetailsService implements UserDetailsService {

    @Autowired
    private DataSource dataSource;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = new User();
        try(Connection dbConnection = dataSource.getConnection()) {
            PreparedStatement pstmt = dbConnection.prepareStatement("SELECT * FROM civic_duty_user WHERE email = ?");
            pstmt.setString(1, email);
            ResultSet rs = pstmt.executeQuery();
            rs.next();
            user.setUserID(rs.getLong("user_id"));
            user.setFname(rs.getString("fname"));
            user.setLname(rs.getString("lname"));
            user.setUserType(rs.getString("user_type").charAt(0));
            user.setEmail(rs.getString("email"));
            user.setPassword(rs.getString("password"));
            user.setPhone(rs.getString("phone_number"));
            user.setZip(rs.getInt("zip_code"));
            user.setDOB(rs.getDate("dob"));
            user.setGender(rs.getString("gender"));
            user.setEthnicity(rs.getString("ethnicity"));
            user.setPhysicalImp(rs.getInt("physical_imp"));
            user.setEmotionalImp(rs.getInt("emotional_imp"));
            user.setIntellectualImp(rs.getInt("intellectual_imp"));
            user.setSocialImp(rs.getInt("social_imp"));
            user.setSpiritualImp(rs.getInt("spiritual_imp"));
            user.setEnvironmentalImp(rs.getInt("environmental_imp"));
            user.setOccupationalImp(rs.getInt("occupational_imp"));
            user.setFinancialImp(rs.getInt("financial_imp"));
        } catch(UsernameNotFoundException e) {
            System.out.println("No registered user with this email address");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return user;
    }
}
