package com.qa.marveldemonstration.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController  // is a component which therefore would be put into the bean bag - allow external access to our app via HTTPRequests
public class TestController {

	@GetMapping("/test") //@TypeOfRequest("location")
	public String test() {
		return "Yay, it works";
	}
	
	

	
}
