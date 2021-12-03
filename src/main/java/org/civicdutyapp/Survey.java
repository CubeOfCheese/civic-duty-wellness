package org.civicdutyapp;

import java.util.List;
import java.sql.Date;

public class Survey {
    private Long surveyId;
    private int userId;
    private Date surveyDate;
    private int physicalPerf;
    private int emotionalPerf;
    private int intellectualPerf;
    private int socialPerf;
    private int spiritualPerf;
    private int environmentalPerf;
    private int occupationalPerf;
    private int financialPerf;
    private List<Activity> activities;

    public Survey() {}

    public Survey(long surveyId, int userId, Date date,
    int phyPerf, int emPerf, int intPerf, int socPerf,
    int spiPerf, int envPerf, int occuPerf, int finPerf,
    List<Activity> activities) {
        this.surveyId  = surveyId;
        this.userId = userId;
        this.surveyDate = date;
        this.physicalPerf = phyPerf;
        this.emotionalPerf = emPerf;
        this.intellectualPerf = intPerf;
        this.socialPerf = socPerf;
        this.spiritualPerf = spiPerf;
        this.environmentalPerf = envPerf;
        this.occupationalPerf = occuPerf;
        this.financialPerf = finPerf;
        this.activities = activities;
    }

    public Survey(int userId, Date date,
    int phyPerf, int emPerf, int intPerf, int socPerf,
    int spiPerf, int envPerf, int occuPerf, int finPerf) {
        this.userId = userId;
        this.surveyDate = date;
        this.physicalPerf = phyPerf;
        this.emotionalPerf = emPerf;
        this.intellectualPerf = intPerf;
        this.socialPerf = socPerf;
        this.spiritualPerf = spiPerf;
        this.environmentalPerf = envPerf;
        this.occupationalPerf = occuPerf;
        this.financialPerf = finPerf;
    }

    public Survey( Date date, int phyPerf, int emPerf, int intPerf,
    int socPerf, int spiPerf, int envPerf, int occuPerf, int finPerf) {
        this.surveyDate = date;
        this.physicalPerf = phyPerf;
        this.emotionalPerf = emPerf;
        this.intellectualPerf = intPerf;
        this.socialPerf = socPerf;
        this.spiritualPerf = spiPerf;
        this.environmentalPerf = envPerf;
        this.occupationalPerf = occuPerf;
        this.financialPerf = finPerf;
    }

    public Long getSurveyID() {
        return surveyId;
    }
    public void setSurveyID(Long surveyId) {
        this.surveyId = surveyId;
        for (int i = 0; i < activities.size(); i++) {
          activities.get(i).setSurveyID(surveyId.intValue());
        }
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
    public int getPhysicalPerf() {
        return physicalPerf;
    }
    public void setPhysicalPerf(int physicalPerf) {
        this.physicalPerf =  physicalPerf;
    }
    public int getEmotionalPerf() {
        return emotionalPerf;
    }
    public void setEmotionalPerf(int emotionalPerf) {
        this.emotionalPerf = emotionalPerf;
    }
    public int getIntellectualPerf() {
        return intellectualPerf;
    }
    public void setIntellectualPerf(int intellectualPerf) {
        this.intellectualPerf = intellectualPerf;
    }
    public int getSocialPerf() {
        return socialPerf;
    }
    public void setSocialPerf(int socialPerf) {
        this.socialPerf = socialPerf;
    }
    public int getSpiritualPerf() {
        return spiritualPerf;
    }
    public void setSpiritualPerf(int spiritualPerf) {
        this.spiritualPerf = spiritualPerf;
    }
    public int getEnvironmentalPerf() {
        return environmentalPerf;
    }
    public void setEnvironmentalPerf(int environmentalPerf) {
        this.environmentalPerf = environmentalPerf;
    }
    public int getOccupationalPerf() {
        return occupationalPerf;
    }
    public void setOccupationalPerf(int occupationalPerf) {
        this.occupationalPerf = occupationalPerf;
    }
    public int getFinancialPerf() {
        return financialPerf;
    }
    public void setFinancialPerf(int financialPerf) {
        this.financialPerf = financialPerf;
    }
    public List<Activity> getActivities() {
        return activities;
    }
    public void setActivities(List<Activity> activities) {
        this.activities = activities;
    }
    public int countActivities() {
      return activities.size();
    }

    @Override
    public String toString() {
        String out = "Survey{" +
                "userId='" + userId + '\'' +
                ", surveyDate='" + surveyDate + '\'' +
                ", physicalPerf=" + physicalPerf +
                ", emotionalPerf=" + emotionalPerf +
                ", intellectualPerf=" + intellectualPerf +
                ", socialPerf=" + socialPerf +
                ", spiritualPerf=" + spiritualPerf +
                ", environmentalPerf=" + environmentalPerf +
                ", occupationalPerf=" + occupationalPerf +
                ", financialPerf=" + financialPerf + "\n";
        for (int i = 0; i < activities.size(); i++) {
                out = out + "\t" + activities.get(i).toString() + ",\n";
        }
        out = out + '}';
        return out;
    }
}
