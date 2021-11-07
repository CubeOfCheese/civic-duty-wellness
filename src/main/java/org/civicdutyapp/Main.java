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

  @RequestMapping(value = { "/", "/survey", "/login", "/registration" })
  String index() {
    return "index";
  }

  @ResponseBody
  @RequestMapping(path = "/user/{id}/wellness-report", produces = "application/json; charset=UTF-8")
  ResponseEntity<?> userWellnessReport(@PathVariable Integer id) {
    WellnessReport report;
    try(Connection dbConnection = dataSource.getConnection()) {
      PreparedStatement pstmt = dbConnection.prepareStatement("SELECT * FROM survey WHERE user_id = ? AND survey_date = "
      + "(SELECT MAX(survey_date) FROM survey WHERE user_id = ?)");
      pstmt.setInt(1, id);
      pstmt.setInt(2, id);
      ResultSet rs = pstmt.executeQuery();
      rs.next();
      report = new WellnessReport(id, rs.getInt("emotional_perf"), rs.getInt("spiritual_perf"),
      rs.getInt("intellectual_perf"), rs.getInt("physical_perf"), rs.getInt("environmental_perf"),
      rs.getInt("financial_perf"), rs.getInt("social_perf"), rs.getInt("occupational_perf"));
    } catch(Exception e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return new ResponseEntity<>(report, HttpStatus.OK);
  }

  @PostMapping(path = "/survey/add", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<?> createSurvey(@RequestBody String data) {
    ObjectMapper objectMapper = new ObjectMapper();
    objectMapper.setTimeZone(TimeZone.getDefault());
    try{
      Survey survey = objectMapper.readValue(data, Survey.class);
      try(Connection dbConnection = dataSource.getConnection()){
        PreparedStatement pstmt = dbConnection.prepareStatement("INSERT INTO survey (user_id, survey_date, "
        + "emotional_perf, spiritual_perf, intellectual_perf, physical_perf, environmental_perf, financial_perf, social_perf, occupational_perf)"
        + "VALUES (?,?,?,?,?,?,?,?,?,?)");
        pstmt.setInt(1, survey.getUserID());
        pstmt.setDate(2, survey.getSurveyDate());
        pstmt.setInt(3, survey.getEmotionalPerf());
        pstmt.setInt(4, survey.getSpiritualPerf());
        pstmt.setInt(5, survey.getIntellectualPerf());
        pstmt.setInt(6, survey.getPhysicalPerf());
        pstmt.setInt(7, survey.getEnvironmentalPerf());
        pstmt.setInt(8, survey.getFinancialPerf());
        pstmt.setInt(9, survey.getSocialPerf());
        pstmt.setInt(10, survey.getOccupationalPerf());
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
