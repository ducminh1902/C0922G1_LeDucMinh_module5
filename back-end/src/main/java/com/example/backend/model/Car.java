package com.example.backend.model;

import javax.persistence.*;

@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String soXe;
    private String tenNhaxe;
    private String diemDi;
    private String diemDen;
    private String soDienThoai;
    private String email;
    private String gioDi;
    private String gioDen;

    @ManyToOne
    @JoinColumn(name = "car_type_id",referencedColumnName = "id")
    private CarType carType;

    public Car() {
    }

    public Car(int id, String soXe, String tenNhaxe, String diemDi, String diemDen, String soDienThoai, String email, String gioDi, String gioDen, CarType carType) {
        this.id = id;
        this.soXe = soXe;
        this.tenNhaxe = tenNhaxe;
        this.diemDi = diemDi;
        this.diemDen = diemDen;
        this.soDienThoai = soDienThoai;
        this.email = email;
        this.gioDi = gioDi;
        this.gioDen = gioDen;
        this.carType = carType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSoXe() {
        return soXe;
    }

    public void setSoXe(String soXe) {
        this.soXe = soXe;
    }

    public String getTenNhaxe() {
        return tenNhaxe;
    }

    public void setTenNhaxe(String tenNhaxe) {
        this.tenNhaxe = tenNhaxe;
    }

    public String getDiemDi() {
        return diemDi;
    }

    public void setDiemDi(String diemDi) {
        this.diemDi = diemDi;
    }

    public String getDiemDen() {
        return diemDen;
    }

    public void setDiemDen(String diemDen) {
        this.diemDen = diemDen;
    }

    public String getSoDienThoai() {
        return soDienThoai;
    }

    public void setSoDienThoai(String soDienThoai) {
        this.soDienThoai = soDienThoai;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGioDi() {
        return gioDi;
    }

    public void setGioDi(String gioDi) {
        this.gioDi = gioDi;
    }

    public String getGioDen() {
        return gioDen;
    }

    public void setGioDen(String gioDen) {
        this.gioDen = gioDen;
    }

    public CarType getCarType() {
        return carType;
    }

    public void setCarType(CarType carType) {
        this.carType = carType;
    }
}
