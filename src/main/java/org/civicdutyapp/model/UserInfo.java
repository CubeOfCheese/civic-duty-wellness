package org.civicdutyapp.model;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserInfo implements UserDetailsService {

    // get information from the database

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // User u = userDB.getUser(email);
        // return new org.springframework.security.core.userDetails.User(u.getEmail(),
        // u.getPassword(), new ArrayList<>());
        return null;
    }

}