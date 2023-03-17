package com.example.backend.service;

import com.example.backend.model.Car;
import com.example.backend.repository.ICarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CarService implements ICarService{

    @Autowired
    private ICarRepository carRepository;

    @Override
    public Page<Car> display(Pageable pageable) {
        return carRepository.display(pageable);
    }

    @Override
    public void delete(int id) {
         carRepository.delete(id);
    }
}
