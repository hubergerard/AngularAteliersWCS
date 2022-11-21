package fr.codewise.kittenadopt.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.codewise.kittenadopt.entities.Kitten;
import fr.codewise.kittenadopt.repositories.KittenRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/kittens")
public class KittenController {

    @Autowired
    KittenRepository kittenRepository;
    
    @GetMapping
    public List<Kitten> findAllKittensByIsAdopted(Boolean isAdopted) {
        return this.kittenRepository.findAllKittensByIsAdopted(isAdopted);
    }
}
