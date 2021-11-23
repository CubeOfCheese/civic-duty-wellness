package org.civicdutyapp;

import java.sql.Date;

public class Survey {
    private Long surveyId;
    private int userId;
    private Date surveyDate;
    private int emotionalPerf;
    private int spiritualPerf;
    private int intellectualPerf;
    private int physicalPerf;
    private int environmentalPerf;
    private int financialPerf;
    private int socialPerf;
    private int occupationalPerf;

    public Survey() {}

    public Survey(long surveyId, int userId, Date date,
    int emPerf, int spiPerf, int intPerf, int phyPerf, int envPerf,
    int finPerf, int socPerf, int occuPerf) {
        this.surveyId  = surveyId;
        this.userId = userId;
        this.surveyDate = date;
        this.emotionalPerf = emPerf;
        this.spiritualPerf = spiPerf;
        this.intellectualPerf = intPerf;
        this.physicalPerf = phyPerf;
        this.environmentalPerf = envPerf;
        this.financialPerf = finPerf;
        this.socialPerf = socPerf;
        this.occupationalPerf = occuPerf;
    }

    public Survey(int userId, Date date,
    int emPerf, int spiPerf, int intPerf, int phyPerf, int envPerf,
    int finPerf, int socPerf, int occuPerf) {
        this.userId = userId;
        this.surveyDate = date;
        this.emotionalPerf = emPerf;
        this.spiritualPerf = spiPerf;
        this.intellectualPerf = intPerf;
        this.physicalPerf = phyPerf;
        this.environmentalPerf = envPerf;
        this.financialPerf = finPerf;
        this.socialPerf = socPerf;
        this.occupationalPerf = occuPerf;
    }

    public Long getSurveyID() {
        return surveyId;
    }
    public void setSurveyID(Long surveyId) {
        this.surveyId = surveyId;
    }
    public int getUserID() {
        return userId;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
    public Date getSurveyDate() {
        return surveyDate;
    }
    public void setSurveyDate(Date surveyDate) {
        this.surveyDate = surveyDate;
    }
    public int getEmotionalPerf() {
        return emotionalPerf;
    }
    public void setEmotionalPerf(int emotionalPerf) {
        this.emotionalPerf = emotionalPerf;
    }
    public int getSpiritualPerf() {
        return spiritualPerf;
    }
    public void setSpiritualPerf(int spiritualPerf) {
        this.spiritualPerf = spiritualPerf;
    }
    public int getIntellectualPerf() {
        return intellectualPerf;
    }
    public void setIntellectualPerf(int intellectualPerf) {
        this.intellectualPerf = intellectualPerf;
    }
    public int getPhysicalPerf() {
        return physicalPerf;
    }
    public void setPhysicalPerf(int physicalPerf) {
        this.physicalPerf =  physicalPerf;
    }
    public int getEnvironmentalPerf() {
        return environmentalPerf;
    }
    public void setEnvironmentalPerf(int environmentalPerf) {
        this.environmentalPerf = environmentalPerf;
    }
    public int getFinancialPerf() {
        return financialPerf;
    }
    public void setFinancialPerf(int financialPerf) {
        this.financialPerf = financialPerf;
    }
    public int getSocialPerf() {
        return socialPerf;
    }
    public void setSocialPerf(int socialPerf) {
        this.socialPerf = socialPerf;
    }
    public int getOccupationalPerf() {
        return occupationalPerf;
    }
    public void setOccupationalPerf(int occupationalPerf) {
        this.occupationalPerf = occupationalPerf;
    }

    @Override
    public String toString() {
        return "Survey{" +
                "userId='" + userId + '\'' +
                ", surveyDate='" + surveyDate + '\'' +
                ", emotionalPerf=" + emotionalPerf +
                ", spiritualPerf='" + spiritualPerf + '\'' +
                ", intellectualPerf='" + intellectualPerf + '\'' +
                ", physicalPerf='" + physicalPerf + '\'' +
                ", environmentalPerf='" + environmentalPerf + '\'' +
                ", financialPerf='" + financialPerf + '\'' +
                ", socialPerf='" + socialPerf + '\'' +
                ", occupationalPerf='" + occupationalPerf + '\'' +
                '}';
    }
}
