package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Table;
import com.example.demo.service.TableService;

@CrossOrigin(
        origins = "http://localhost:5173"
)
@RestController
@RequestMapping("/api/tables")
public class TableController {

    private final TableService
            tableService;

    public TableController(
            TableService tableService
    ) {
        this.tableService =
                tableService;
    }

    @GetMapping
    public List<Table> getTables() {

        return tableService
                .getTables();

    }
}