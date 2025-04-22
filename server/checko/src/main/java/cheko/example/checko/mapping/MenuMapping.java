package cheko.example.checko.mapping;

import java.util.ArrayList;
import java.util.List;

import cheko.example.checko.dto.MenuDto;
import cheko.example.checko.model.Menu;

public class MenuMapping {

    public static List<MenuDto> getMenuDto(List<Menu> menus) {
        List<MenuDto> menuDtoList = new ArrayList<>();

        for (Menu menu : menus) {
            MenuDto dto = new MenuDto(
                menu.getId(),
                menu.getName(),
                menu.getDescription(),
                menu.getPrice(),
                menu.getImage(),
                menu.getCalorie(),
                menu.getCategory(),
                menu.getLat(),
                menu.getLng()
            );
            menuDtoList.add(dto);
        }

        return menuDtoList;
    }
}
