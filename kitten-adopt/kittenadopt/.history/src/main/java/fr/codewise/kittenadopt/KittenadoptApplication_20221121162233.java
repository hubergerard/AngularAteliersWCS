package fr.codewise.kittenadopt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import fr.codewise.kittenadopt.entities.Kitten;
import fr.codewise.kittenadopt.repositories.KittenRepository;

@SpringBootApplication
public class KittenadoptApplication implements CommandLineRunner {

	@Autowired
	KittenRepository kittenRepository;

	public static void main(String[] args) {
		SpringApplication.run(KittenadoptApplication.class, args);
	}

	public void run(String... args) {
		Kitten felix = new Kitten(null, "Felix", 14, "noir", "Persan", false);
		this.kittenRepository.save(felix);
	}

}
