package com.qa.marveldemonstration.config;

import java.time.LocalTime;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration // puts entire class into bean bag
public class AppConfig {

	// by default Beans have a SINGLETON instance = only one instance that is
	// continously changed
	@Bean
	public LocalTime beanExercise() {
		return LocalTime.now();
	}

	// @Scope("prototype") = create multiple instances of the object in the beanbag
	@Bean
	@Scope("prototype")
	public String farewell() {
		return "Goodbye";
	}
}
