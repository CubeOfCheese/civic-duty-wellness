package org.civicdutyapp;

public class WellnessReport {
    private int userId;
    private double emotionalPerf;
    private double spiritualPerf;
    private double intellectualPerf;
    private double physicalPerf;
    private double environmentalPerf;
    private double financialPerf;
    private double socialPerf;
    private double occupationalPerf;

    public WellnessReport(int userId,
    double emPerf, double spiPerf, double intPerf, double phyPerf, double envPerf,
    double finPerf, double socPerf, double occuPerf) {
        this.userId = userId;
        this.emotionalPerf = emPerf;
        this.spiritualPerf = spiPerf;
        this.intellectualPerf = intPerf;
        this.physicalPerf = phyPerf;
        this.environmentalPerf = envPerf;
        this.financialPerf = finPerf;
        this.socialPerf = socPerf;
        this.occupationalPerf = occuPerf;
    }

    public int getUserId() {
        return userId;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
    public double getEmotionalPerf() {
        return emotionalPerf;
    }
    public void setEmotionalPerf(double emotionalPerf) {
        this.emotionalPerf = emotionalPerf;
    }
    public double getSpiritualPerf() {
        return spiritualPerf;
    }
    public void setSpiritualPerf(double spiritualPerf) {
        this.spiritualPerf = spiritualPerf;
    }
    public double getIntellectualPerf() {
        return intellectualPerf;
    }
    public void setIntellectualPerf(double intellectualPerf) {
        this.intellectualPerf = intellectualPerf;
    }
    public double getPhysicalPerf() {
        return physicalPerf;
    }
    public void setPhysicalPerf(double physicalPerf) {
        this.physicalPerf =  physicalPerf;
    }
    public double getEnvironmentalPerf() {
        return environmentalPerf;
    }
    public void setEnvironmentalPerf(double environmentalPerf) {
        this.environmentalPerf = environmentalPerf;
    }
    public double getFinancialPerf() {
        return financialPerf;
    }
    public void setFinancialPerf(double financialPerf) {
        this.financialPerf = financialPerf;
    }
    public double getSocialPerf() {
        return socialPerf;
    }
    public void setSocialPerf(double socialPerf) {
        this.socialPerf = socialPerf;
    }
    public double getOccupationalPerf() {
        return occupationalPerf;
    }
    public void setOccupationalPerf(double occupationalPerf) {
        this.occupationalPerf = occupationalPerf;
    }

    @Override
    public String toString() {
        return "Performance Report {" +
              "userId='" + userId + '\'' +
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
