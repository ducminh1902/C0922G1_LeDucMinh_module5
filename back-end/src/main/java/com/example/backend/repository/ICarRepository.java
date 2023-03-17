package com.example.backend.repository;

import com.example.backend.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ICarRepository extends JpaRepository<Car,Integer> {
    @Query(value = "select * from car",
//            countQuery = "select count(*) from (select c.* from car as c) as car_table",
            nativeQuery = true)
    Page<Car> display(Pageable pageable);

    @Query(value = "delete from car where id = ?",nativeQuery = true)
    void delete(int id);

}
