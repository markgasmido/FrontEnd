package com.qa.marveldemonstration.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.marveldemonstration.domain.Marvel;
import com.qa.marveldemonstration.service.MarvelService;

@RestController
public class MarvelController {
	private MarvelService service;
	
	public MarvelController(MarvelService service) {
		this.service = service;
	}

	// CRUD

//	// CREATE
//	@PostMapping("/create")
//	public void createCharacter(@RequestBody Marvel marvel) {
//		this.marvelList.add(marvel);
//	}

	// Create - better version of one created at 26
	@PostMapping("/create2")
	public ResponseEntity<Marvel> createCharacter2(@RequestBody Marvel marvel) {
		return new ResponseEntity<Marvel>(this.service.create(marvel), HttpStatus.CREATED);
	}

//	// READALL
//	@GetMapping("/getAll")
//	public List<Marvel> getMarvel() {
//		return this.service.getAll();
//	}
	
	// READALL - BETTER version of 40
	@GetMapping("/getAll2")
	public ResponseEntity<List<Marvel>> getMarvel2() {
		return ResponseEntity.ok(this.service.getAll());
	}

	// READ
	@GetMapping("/getOne/{index}") // path variable {id}
	public ResponseEntity<Marvel> getCharacterById(@PathVariable int index) {
		return ResponseEntity.ok(this.service.getById(index));
	}

	/*
	 * -- figure out hot to get PathParam to work //READ
	 * 
	 * @GetMapping("/findByName") public Marvel findByName(@PathParam("name") String
	 * name) { for(Marvel m : marvelList) { System.out.println(m.getName()); }
	 * System.out.println(name); return null; }
	 */

	// UPDATE
	@PutMapping("/update/{index}")
	public void updateCharacterById(@PathVariable int index, @RequestBody Marvel marvel) {
		this.service.update(index, marvel);
	}

//	// UPDATE
//	@PatchMapping("/update/{index}/{path}")
//	public void updateCharacterByIdDead(@PathVariable("index") int index, @PathVariable boolean path) {
//		Marvel toUpdate = marvelList.get(index);
//		toUpdate.setDead(path);
//	}

	// DELETE
	@DeleteMapping("/remove/{index}")
	public void removeCharacter(@PathVariable int index) {
		this.service.remove(index);
	}

}
