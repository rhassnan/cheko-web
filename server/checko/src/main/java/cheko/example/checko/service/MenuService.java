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

    public MenuDto getSecondHighestCalorieByCategory(String category) {
        List<Menu> sortedMenus = menuRepo.findTopByCategoryOrderByCalorieDesc(category);
    
        if (sortedMenus.size() >= 2) {
            Menu secondHighest = sortedMenus.get(1);
            return new MenuDto(
                secondHighest.getId(),
                secondHighest.getName(),
                secondHighest.getDescription(),
                secondHighest.getPrice(),
                secondHighest.getImage(),
                secondHighest.getCalorie(),
                secondHighest.getCategory(),
                secondHighest.getLat(),
                secondHighest.getLng()
            );
        }
    
        throw new RuntimeException("Not enough meals in category: " + category);
    }

    public List<MenuDto> getSecondHighestFromEachCategory() {
        List<Menu> menus = menuRepo.findSecondHighestPerEachCategory();
        return MenuMapping.getMenuDto(menus);
    }
    
    
    
}
