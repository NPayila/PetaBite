package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.MenuItem;
import com.example.demo.service.MenuService;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/menu")
public class MenuController {

    private final MenuService menuService;

    public MenuController(
            MenuService menuService
    ) {
        this.menuService = menuService;
    }

    @GetMapping
    public List<MenuItem> getMenu() {

        return menuService.getMenu();

    }
}