package com.qa.marveldemonstration.service;

import java.util.List;

import com.qa.marveldemonstration.domain.Marvel;

public interface MarvelService {
	Marvel create(Marvel m);
	List<Marvel> getAll();
	Marvel getById(int id);
	boolean remove(int id);
	Marvel update(int id, Marvel newMarvel);
	
}
