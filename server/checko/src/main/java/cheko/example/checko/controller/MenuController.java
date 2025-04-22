package cheko.example.checko.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cheko.example.checko.dto.MenuDto;
import cheko.example.checko.service.MenuService;
 
@RestController
@RequestMapping("/menu")
@CrossOrigin(origins = "*") 
public class MenuController {

    private final MenuService menuService;

     public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }


    @GetMapping("/")
    public  List<MenuDto>  getMenu() {
        return menuService.getAllMenus();
        
    }

    @GetMapping("/search")
    public List<MenuDto> searchMenus(@RequestParam String keyword) {
        return menuService.searchMenus(keyword);
    }

}