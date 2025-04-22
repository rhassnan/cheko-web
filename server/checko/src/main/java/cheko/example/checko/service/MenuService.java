package cheko.example.checko.service;
import java.util.List;

import cheko.example.checko.mapping.MenuMapping;
import cheko.example.checko.model.Menu;
import cheko.example.checko.repo.MenuRepo;

import org.springframework.stereotype.Service;

import cheko.example.checko.dto.MenuDto;

@Service
public class MenuService {
    private final MenuRepo menuRepo;

    public MenuService(MenuRepo menuRepo) {
        this.menuRepo = menuRepo;
    }

     public List<MenuDto> getAllMenus() {
        return MenuMapping.getMenuDto(menuRepo.findAll());
    }

    public List<MenuDto> searchMenus(String keyword) {
        return MenuMapping.getMenuDto(menuRepo.searchByNameOrDescription(keyword));
    }
    
}
