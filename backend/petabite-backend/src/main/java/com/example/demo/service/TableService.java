package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Table;
import com.example.demo.repository.TableRepository;

@Service
public class TableService {

    private final TableRepository
            tableRepository;

    public TableService(
            TableRepository tableRepository
    ) {
        this.tableRepository =
                tableRepository;
    }

    public List<Table> getTables() {

        return tableRepository
                .findAll();

    }
}