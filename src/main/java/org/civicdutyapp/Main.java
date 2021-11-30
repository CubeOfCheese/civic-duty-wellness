/*
 * Copyright 2002-2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.civicdutyapp;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.Map;
import java.util.TimeZone;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
@SpringBootApplication
public class Main {

  @Value("${spring.datasource.url}")
  private String dbUrl;

  @Autowired
  private DataSource dataSource;

  public static void main(String[] args) throws Exception {
    SpringApplication.run(Main.class, args);
  }

  @RequestMapping(value = { "/", "/survey", "/login", "/registration", "/importance" })
  String index() {
    return "index";
  }

  @PostMapping(path = "/registration/attempt", consumes = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<?> requestRegistration(@RequestBody String data) {
    ObjectMapper objectMapper = new ObjectMapper();
    objectMapper.setTimeZone(TimeZone.getDefault());
    try {
      User registrationAttempt = objectMapper.readValue(data, User.class);
      try(Connection dbConnection = dataSource.getConnection()) {
        PreparedStatement check = dbConnection.prepareStatement("SELECT * FROM civic_duty_user WHERE email = ?");
        check.setString(1, registrationAttempt.getEmail());
        ResultSet rs = check.executeQuery();
        if (!rs.isBeforeFirst()) {
          PreparedStatement pstmt = dbConnection.prepareStatement("INSERT INTO civic_duty_user "
          + "(user_id, fname, lname, user_type, email, password, phone_number, zip_code, dob, gender, ethnicity, "
          + "physical_imp, emotional_imp, intellectual_imp, social_imp, spiritual_imp, environmental_imp, occupational_imp, "
          + "financial_imp, salt) VALUES (DEFAULT,?,?,'u',?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
          pstmt.setString(1, registrationAttempt.getFname());
          pstmt.setString(2, registrationAttempt.getLname());
          pstmt.setString(3, registrationAttempt.getEmail());
          pstmt.setString(4, registrationAttempt.getPassword());
          pstmt.setString(5, registrationAttempt.getPhone());
          pstmt.setInt(6, registrationAttempt.getZip());
          pstmt.setDate(7, registrationAttempt.getDOB());
          pstmt.setString(8, registrationAttempt.getGender());
          pstmt.setString(9, registrationAttempt.getEthnicity());
          pstmt.setInt(10, registrationAttempt.getPhysicalImp());
          pstmt.setInt(11, registrationAttempt.getEmotionalImp());
          pstmt.setInt(12, registrationAttempt.getIntellectualImp());
          pstmt.setInt(13, registrationAttempt.getSocialImp());
          pstmt.setInt(14, registrationAttempt.getSpiritualImp());
          pstmt.setInt(15, registrationAttempt.getEnvironmentalImp());
          pstmt.setInt(16, registrationAttempt.getOccupationalImp());
          pstmt.setInt(17, registrationAttempt.getFinancialImp());
          pstmt.setString(18, registrationAttempt.getSalt());
          pstmt.executeUpdate();
        }
        else {
          return new ResponseEntity<>("FAILURE", HttpStatus.BAD_REQUEST);
        }
      } catch(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
      }
    } catch(JsonProcessingException e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
    return new ResponseEntity<>("", HttpStatus.OK);
  }

  @PostMapping(path = "/login/attempt", consumes = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<?> requestLogin(@RequestBody String data) {
    ObjectMapper objectMapper = new ObjectMapper();
    try {
      User loginAttempt = objectMapper.readValue(data, User.class);
      try(Connection dbConnection = dataSource.getConnection()) {
        PreparedStatement pstmt = dbConnection.prepareStatement("SELECT password FROM civic_duty_user WHERE email = ?");
        pstmt.setString(1, loginAttempt.getEmail());
        ResultSet rs = pstmt.executeQuery();
        if (rs.isBeforeFirst()) {
          rs.next();
          if (!rs.getString("password").equals(loginAttempt.getPassword())) {
            return new ResponseEntity<>("FAILURE", HttpStatus.BAD_REQUEST);
          }
        }
        else {
          return new ResponseEntity<>("FAILURE", HttpStatus.BAD_REQUEST);
        }
      } catch(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
      }
    } catch(JsonProcessingException e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
    return new ResponseEntity<>("", HttpStatus.OK);
  }

  @PostMapping(path = "/user/{id}/importance/update", consumes = MediaType.APPLICATION_JSON_VALUE)
  ResponseEntity<?> updateImportance(@PathVariable Integer id, @RequestBody String data) {
    ObjectMapper objectMapper = new ObjectMapper();
    try {
      User importance = objectMapper.readValue(data, User.class);
      try(Connection dbConnection = dataSource.getConnection()) {
        PreparedStatement pstmt = dbConnection.prepareStatement("UPDATE civic_duty_user SET"
        + "(physical_imp, emotional_imp, intellectual_imp, social_imp, spiritual_imp, environmental_imp, occupational_imp,"
        + "financial_imp,) = (?,?,?,?,?,?,?,?) WHERE user_id = ?");
        pstmt.setInt(1, importance.getPhysicalImp());
        pstmt.setInt(2, importance.getEmotionalImp());
        pstmt.setInt(3, importance.getIntellectualImp());
        pstmt.setInt(4, importance.getSocialImp());
        pstmt.setInt(5, importance.getSpiritualImp());
        pstmt.setInt(6, importance.getEnvironmentalImp());
        pstmt.setInt(7, importance.getOccupationalImp());
        pstmt.setInt(8, importance.getFinancialImp());
        pstmt.setInt(9, id);
        pstmt.executeUpdate();
      } catch(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
      }
    } catch(JsonProcessingException e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
    return new ResponseEntity<>("", HttpStatus.OK);
  }

  @ResponseBody
  @GetMapping(path = "/user/{id}", produces = "application/json; charset=UTF-8")
  ResponseEntity<?> user(@PathVariable Integer id) {
    User user = new User();
    try(Connection dbConnection = dataSource.getConnection()) {
      PreparedStatement pstmt = dbConnection.prepareStatement("SELECT * FROM civic_duty_user WHERE user_id = ?");
      pstmt.setInt(1, id);
      ResultSet rs = pstmt.executeQuery();
      rs.next();
      user.setUserID(rs.getLong("user_id"));
      user.setFname(rs.getString("fname"));
      user.setLname(rs.getString("lname"));
      user.setUserType(rs.getString("user_type").charAt(0));
      user.setEmail(rs.getString("email"));
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
    } catch(Exception e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return new ResponseEntity<>(user, HttpStatus.OK);
  }

  @ResponseBody
  @PostMapping(path = "/user/salt", consumes = MediaType.APPLICATION_JSON_VALUE, produces = "application/json; charset=UTF-8")
  ResponseEntity<?> userEmail(@RequestBody String data) {
    ObjectMapper objectMapper = new ObjectMapper();
    User email;
    try{
      email = objectMapper.readValue(data, User.class);
      try(Connection dbConnection = dataSource.getConnection()) {
        PreparedStatement pstmt = dbConnection.prepareStatement("SELECT salt FROM civic_duty_user WHERE email = ?");
        pstmt.setString(1, email.getEmail());
        ResultSet rs = pstmt.executeQuery();
        if (rs.isBeforeFirst()) {
          rs.next();
          email.setSalt(rs.getString("salt"));
        }
        else {
          return new ResponseEntity<>("FAILURE", HttpStatus.BAD_REQUEST);
        }
      } catch(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
      }
    } catch(JsonProcessingException e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
    return new ResponseEntity<>(email, HttpStatus.OK);
  }

  @ResponseBody
  @RequestMapping(path = "/user/{id}/survey/recent", produces = "application/json; charset=UTF-8")
  ResponseEntity<?> getRecentSurvey(@PathVariable Integer id) {
    Survey survey;
    try(Connection dbConnection = dataSource.getConnection()) {
      PreparedStatement pstmt = dbConnection.prepareStatement("SELECT * FROM survey WHERE user_id = ? AND survey_date = "
          + "(SELECT MAX(survey_date) FROM survey WHERE user_id = ?)");
      pstmt.setInt(1, id);
      pstmt.setInt(2, id);
      ResultSet rs = pstmt.executeQuery();
      if (rs.isBeforeFirst()) {
        rs.next();
        survey = new Survey(rs.getDate("survey_date"), rs.getInt("physical_perf"), rs.getInt("emotional_perf"),
        rs.getInt("intellectual_perf"), rs.getInt("social_perf"), rs.getInt("spiritual_perf"),
        rs.getInt("environmental_perf"), rs.getInt("occupational_perf"), rs.getInt("financial_perf"));
      } else {
        Survey noData = new Survey();
        noData.setSurveyID(new Long(-1));
        return new ResponseEntity<>(noData, HttpStatus.BAD_REQUEST);
      }
    } catch(Exception e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return new ResponseEntity<>(survey, HttpStatus.OK);
  }

  @ResponseBody
  @RequestMapping(path = "/user/{id}/survey", produces = "application/json; charset=UTF-8")
  ResponseEntity<?> getSurvey(@PathVariable Integer id, @RequestBody String data) {
    ObjectMapper objectMapper = new ObjectMapper();
    objectMapper.setTimeZone(TimeZone.getDefault());
    Survey survey;
    try {
      survey = objectMapper.readValue(data, Survey.class);
      try(Connection dbConnection = dataSource.getConnection()) {
        PreparedStatement pstmt = dbConnection.prepareStatement("SELECT * FROM survey WHERE user_id = ? AND survey_date = ?");
        pstmt.setInt(1, id);
        pstmt.setDate(2, survey.getSurveyDate());
        ResultSet rs = pstmt.executeQuery();
        if (rs.isBeforeFirst()) {
          rs.next();
          survey = new Survey(rs.getDate("survey_date"), rs.getInt("emotional_perf"), rs.getInt("spiritual_perf"),
          rs.getInt("intellectual_perf"), rs.getInt("physical_perf"), rs.getInt("environmental_perf"),
          rs.getInt("financial_perf"), rs.getInt("social_perf"), rs.getInt("occupational_perf"));
        } else {
          Survey noData = new Survey();
          noData.setSurveyID(new Long(-1));
          return new ResponseEntity<>(noData, HttpStatus.BAD_REQUEST);
        }
      } catch(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
      }
    } catch (JsonProcessingException e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
    return new ResponseEntity<>(survey, HttpStatus.OK);
  }

  @PostMapping(path = "/survey/add", consumes = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<?> createSurvey(@RequestBody String data) {
    ObjectMapper objectMapper = new ObjectMapper();
    objectMapper.setTimeZone(TimeZone.getDefault());
    try {
      Survey survey = objectMapper.readValue(data, Survey.class);
      try(Connection dbConnection = dataSource.getConnection()) {
        PreparedStatement pstmt = dbConnection.prepareStatement("INSERT INTO survey (user_id, survey_date, "
        + "physical_perf, emotional_perf, intellectual_perf, social_perf, spiritual_perf, environmental_perf, occupational_perf, financial_perf)"
        + "VALUES (?,?,?,?,?,?,?,?,?,?)");
        pstmt.setInt(1, survey.getUserID());
        pstmt.setDate(2, survey.getSurveyDate());
        pstmt.setInt(3, survey.getPhysicalPerf());
        pstmt.setInt(4, survey.getEmotionalPerf());
        pstmt.setInt(5, survey.getIntellectualPerf());
        pstmt.setInt(6, survey.getSocialPerf());
        pstmt.setInt(7, survey.getSpiritualPerf());
        pstmt.setInt(8, survey.getEnvironmentalPerf());
        pstmt.setInt(9, survey.getOccupationalPerf());
        pstmt.setInt(10, survey.getFinancialPerf());
        pstmt.executeUpdate();
      } catch(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
      }
    } catch(JsonProcessingException e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
    return new ResponseEntity<>("", HttpStatus.OK);
  }

  @RequestMapping("/db")
  String db(Map<String, Object> model) {
    try (Connection connection = dataSource.getConnection()) {
      Statement stmt = connection.createStatement();
      stmt.executeUpdate("CREATE TABLE IF NOT EXISTS ticks (tick timestamp)");
      stmt.executeUpdate("INSERT INTO ticks VALUES (now())");
      ResultSet rs = stmt.executeQuery("SELECT tick FROM ticks");

      ArrayList<String> output = new ArrayList<String>();
      while (rs.next()) {
        output.add("Read from DB: " + rs.getTimestamp("tick"));
      }

      model.put("records", output);
      return "db";
    } catch (Exception e) {
      model.put("message", e.getMessage());
      return "error";
    }
  }

  @Bean
  public DataSource dataSource() throws SQLException {
    if (dbUrl == null || dbUrl.isEmpty()) {
      return new HikariDataSource();
    } else {
      HikariConfig config = new HikariConfig();
      config.setJdbcUrl(dbUrl);
      return new HikariDataSource(config);
    }
  }
}
