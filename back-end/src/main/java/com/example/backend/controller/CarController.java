package com.example.backend.controller;

import com.example.backend.model.Car;
import com.example.backend.service.CarService;
import com.example.backend.service.ICarService;
import com.example.backend.service.ICarTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
@CrossOrigin("*")
@RequestMapping("cars")
public class CarController {
    @Autowired
    private CarService carService;
    @Autowired
    private ICarTypeService carTypeService;

    @GetMapping("")
    public ResponseEntity<Page<Car>> showALL(@PageableDefault(size = 3, page = 0) Pageable pageable){
       return new ResponseEntity<>(carService.display(pageable), HttpStatus.OK);
    }

    @GetMapping("delete")
    public String delete(Model model, @ModelAttribute("idDelete") int id, RedirectAttributes redirectAttributes){
        this.carService.delete(id);
        redirectAttributes.addFlashAttribute("mess","Đã Xóa Thành Công");
        model.addAttribute("carList",carService.display(Pageable.unpaged()));
        return "redirect:/car";
    }


}
