package org.civicdutyapp;

import java.sql.Date;

public class User {
    private Long userId;
    private String fname;
    private String lname;
    private char userType;
    private String email;
    private String password;
    private String phone;
    private String salt;
    private int zip;
    private Date dob;
    private String gender;
    private String ethnicity;
    private int physicalImp;
    private int emotionalImp;
    private int intellectualImp;
    private int socialImp;
    private int spiritualImp;
    private int environmentalImp;
    private int occupationalImp;
    private int financialImp;

    public User() {}

    public User(long userId, String fname, String lname, char userType,
    String email, String password, String phone, int zip, Date dob,
    String gender, String ethnicity, int phyImp, int emImp, int intImp,
    int socImp, int spiImp, int envImp, int occuImp, int finImp, String salt) {
        this.userId = userId;
        this.fname = fname;
        this.lname = lname;
        this.userType = userType;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.zip = zip;
        this.dob = dob;
        this.gender = gender;
        this.ethnicity = ethnicity;
        this.physicalImp = phyImp;
        this.emotionalImp = emImp;
        this.intellectualImp = intImp;
        this.socialImp = socImp;
        this.spiritualImp = spiImp;
        this.environmentalImp = envImp;
        this.occupationalImp = occuImp;
        this.financialImp = finImp;
        this.salt = salt;
    }

    public Long getUserID() {
        return userId;
    }
    public void setUserID(Long userId) {
        this.userId = userId;
    }
    public String getFname() {
        return fname;
    }
    public void setFname(String fname) {
        this.fname = fname;
    }
    public String getLname() {
        return lname;
    }
    public void setLname(String lname) {
        this.lname = lname;
    }
    public char getUserType() {
        return userType;
    }
    public void setUserType(char userType) {
        this.userType = userType;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public int getZip() {
        return zip;
    }
    public void setZip(int zip) {
        this.zip = zip;
    }
    public Date getDOB() {
        return dob;
    }
    public void setDOB(Date dob) {
        this.dob = dob;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getEthnicity() {
        return ethnicity;
    }
    public void setEthnicity(String ethnicity) {
        this.ethnicity = ethnicity;
    }
    public int getPhysicalImp() {
        return physicalImp;
    }
    public void setPhysicalImp(int physicalImp) {
        this.physicalImp =  physicalImp;
    }
    public int getEmotionalImp() {
        return emotionalImp;
    }
    public void setEmotionalImp(int emotionalImp) {
        this.emotionalImp = emotionalImp;
    }
    public int getIntellectualImp() {
        return intellectualImp;
    }
    public void setIntellectualImp(int intellectualImp) {
        this.intellectualImp = intellectualImp;
    }
    public int getSocialImp() {
        return socialImp;
    }
    public void setSocialImp(int socialImp) {
        this.socialImp = socialImp;
    }
    public int getSpiritualImp() {
        return spiritualImp;
    }
    public void setSpiritualImp(int spiritualImp) {
        this.spiritualImp = spiritualImp;
    }
    public int getEnvironmentalImp() {
        return environmentalImp;
    }
    public void setEnvironmentalImp(int environmentalImp) {
        this.environmentalImp = environmentalImp;
    }
    public int getOccupationalImp() {
        return occupationalImp;
    }
    public void setOccupationalImp(int occupationalImp) {
        this.occupationalImp = occupationalImp;
    }
    public int getFinancialImp() {
        return financialImp;
    }
    public void setFinancialImp(int financialImp) {
        this.financialImp = financialImp;
    }
    public String getSalt() {
      return salt;
    }
    public void setSalt(String salt) {
      this.salt = salt;
    }

    @Override
    public String toString() {
        return "User{" +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", userType='" + userType + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", zip=" + zip +
                ", dob='" + dob + '\'' +
                ", gender='" + gender + '\'' +
                ", ethnicity='" + ethnicity + '\'' +
                ", physicalImp=" + physicalImp +
                ", emotionalImp=" + emotionalImp +
                ", intellectualImp=" + intellectualImp +
                ", socialImp=" + socialImp +
                ", spiritualImp=" + spiritualImp +
                ", environmentalImp=" + environmentalImp +
                ", occupationalImp=" + occupationalImp +
                ", financialImp=" + financialImp +
                '}';
    }
}
