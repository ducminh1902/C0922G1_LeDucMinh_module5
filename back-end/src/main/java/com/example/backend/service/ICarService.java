package com.example.backend.service;

import com.example.backend.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICarService {
    Page<Car> display(Pageable pageable);

    void delete(int id);
}
