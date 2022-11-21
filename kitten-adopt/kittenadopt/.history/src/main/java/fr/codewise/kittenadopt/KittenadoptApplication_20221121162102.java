package fr.codewise.kittenadopt;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import fr.codewise.kittenadopt.entities.Kitten;

@SpringBootApplication
public class KittenadoptApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(KittenadoptApplication.class, args);
	}

	public void run(String... args) {
		Kitten kitten1 = new Kitten("Felix", 14, "noir","Persan", false);
	}

}
