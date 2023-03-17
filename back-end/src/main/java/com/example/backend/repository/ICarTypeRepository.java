package com.example.backend.repository;

import com.example.backend.model.Car;
import com.example.backend.model.CarType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICarTypeRepository extends JpaRepository<CarType,Integer> {
    @Query(value = "select ct.* from car_type as ct",nativeQuery = true)
    List<CarType> display();
}
