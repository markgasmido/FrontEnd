package com.qa.marveldemonstration;

import java.time.LocalTime;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class MarvelDemonstrationApplication {

	public static void main(String[] args) {
		ApplicationContext test = SpringApplication.run(MarvelDemonstrationApplication.class, args);
		Object byName = test.getBean("beanExercise");
		LocalTime byType = test.getBean(LocalTime.class);
		LocalTime byBoth = test.getBean("beanExercise",LocalTime.class);
		
		System.out.println(byName);
		System.out.println(byType);
		System.out.println(byBoth);
		
	}
	


// a bean is a managed object - meaning the creating, maintenance and destruction of the object
//	is purely under the control of the Spring Framework!

}
