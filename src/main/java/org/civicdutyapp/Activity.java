package org.civicdutyapp;

public class Activity {
    private Long activityId;
    private int surveyId;
    private String activityName;
    private int hours;
    private int minutes;
    private int intensity;

    public Activity() {}

    public Activity(Long activityId, int surveyId,
    String activityName, int hours, int minutes, int intensity) {
      this.activityId = activityId;
      this.surveyId = surveyId;
      this.activityName = activityName;
      this.hours = hours;
      this.minutes = minutes;
      this.intensity = intensity;
    }

    public Activity(Long activityId, String activityName,
    int hours, int minutes, int intensity) {
      this.activityId = activityId;
      this.activityName = activityName;
      this.hours = hours;
      this.minutes = minutes;
      this.intensity = intensity;
    }

    public Long getActivityID() {
        return activityId;
    }
    public void setActivityID(Long activityId) {
        this.activityId = activityId;
    }
    public int getSurveyID() {
        return surveyId;
    }
    public void setSurveyID(int surveyId) {
        this.surveyId = surveyId;
    }
    public String getActivityName() {
        return activityName;
    }
    public void setActivityName(String activityName) {
        this.activityName = activityName;
    }
    public int getHours() {
        return hours;
    }
    public void setHours(int hours) {
        this.hours = hours;
    }
    public int getMinutes() {
        return minutes;
    }
    public void setMinutes(int minutes) {
        this.minutes = minutes;
    }
    public String getDuration() {
        return "" + hours + " hours " + minutes + " minutes";
    }
    public int getIntensity() {
        return intensity;
    }
    public void setIntensity(int intensity) {
        this.intensity = intensity;
    }

    @Override
    public String toString() {
        return "Activity{" +
                "surveyId='" + surveyId + '\'' +
                ", activityName='" + activityName + '\'' +
                ", duration='" + hours + ":" + minutes + '\'' +
                ", intensity=" + intensity +
                '}';
    }
}
