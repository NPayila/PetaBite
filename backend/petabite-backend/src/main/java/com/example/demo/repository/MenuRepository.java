package com.example.demo.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.model.MenuItem;

@Repository
public class MenuRepository {

    public List<MenuItem> findAll() {

        List<MenuItem> menu = new ArrayList<>();

        menu.add(
                new MenuItem(
                        1,
                        "Dragon Ramen",
                        299
                )
        );

        menu.add(
                new MenuItem(
                        2,
                        "Royal Steak",
                        599
                )
        );

        menu.add(
                new MenuItem(
                        3,
                        "Margherita Pizza",
                        399
                )
        );

        return menu;
    }
}