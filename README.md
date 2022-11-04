## mongol_latin

### Галиглах
```javascript
import { romanize } from "mongol_latin";

romanize("Сайн уу, юу байна? \"Өгүүлбэр\" гэдэг үгийг анзаараарай");
//>>> Sain uu, yu baina? "Uguulber" gedeg ugiig anzaaraarai
```

### MNS 5217:2012 стандартыг мөрдөж хөрвүүлэх

```javascript
import { romanize, MNS5217_2012Options } from "mongol_latin";

romanize("Сайн уу, юу байна? \"Өгүүлбэр\" гэдэг үгийг анзаараарай", MNS5217_2012Options);
//>>> Sain uu, yuu baina? "Ögüülber" gedeg ügiig anzaaraarai
```