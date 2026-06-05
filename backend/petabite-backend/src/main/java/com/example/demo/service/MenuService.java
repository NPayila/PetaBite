package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.MenuItem;
import com.example.demo.repository.MenuRepository;

@Service
public class MenuService {

    private final MenuRepository menuRepository;

    public MenuService(
            MenuRepository menuRepository
    ) {
        this.menuRepository = menuRepository;
    }

    public List<MenuItem> getMenu() {

        return menuRepository.findAll();

    }
}