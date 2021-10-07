package org.civicdutyapp;

class WellnessReport {
  private double physical;
  private double emotional;
  private double intellectual;
  private double social;
  private double spiritual;
  private double environmental;
  private double vocational;
  private double financial;

  WellnessReport() {
    physical = 2;
    emotional = 4;
    intellectual = 3;
    social = 3;
    spiritual = 1;
    environmental = 9;
    vocational = 10;
    financial = 8;
  }

  public double getPhysical() {
    return this.physical;
  }
  public double getEmotional() {
    return this.emotional;
  }
  public double getIntellectual() {
    return this.intellectual;
  }
  public double getSocial() {
    return this.social;
  }
  public double getSpiritual() {
    return this.spiritual;
  }
  public double getEnvironmental() {
    return this.environmental;
  }
  public double getVocational() {
    return this.vocational;
  }
  public double getFinancial() {
    return this.financial;
  }
  public void setPhysical(double physical) {
    this.physical = physical;
  }
  public void setEmotional(double emotional) {
    this.emotional = emotional;
  }
  public void setIntellectual(double intellectual) {
    this.intellectual = intellectual;
  }
  public void setSocial(double social) {
    this.social = social;
  }
  public void setSpiritual(double spiritual) {
    this.spiritual = spiritual;
  }
  public void setEnvironmental(double environmental) {
    this.environmental = environmental;
  }
  public void setVocational(double vocational) {
    this.vocational = vocational;
  }
  public void setFinancial(double financial) {
    this.financial = financial;
  }

  @Override
  public String toString() {
    return "WellnessReport{" + " physical:" + physical
            + " emotional:" + emotional
            + " intellectual:" + intellectual
            + " social:" + social
            + " spiritual:" + spiritual
            + " environmental:" + environmental
            + " vocational:" + vocational
            + " financial:" + financial
            + "}";
  }
}
