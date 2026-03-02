---
layout: post
author: senagemici
---

# Soru:

Bir çevre planlama uzmanı, yerleşim bölgelerinin sanayi tesislerine olan uzaklığını etkileyen faktörleri araştırmak istemektedir. Sanayi tesislerine olan uzaklık, çevresel maruziyetin ve yaşam alanlarının güvenliğinin önemli bir göstergesi olarak kabul edilmektedir. Uzman, bölgelerin nem oranı ve havadaki kükürtdioksit (SO₂) seviyelerinin, sanayi tesislerine olan uzaklık üzerinde etkili olup olmadığını incelemeyi amaçlamaktadır. Buna göre 0,05 anlamlılık düzeyinde etkili olup olmadığını araştırınız?

| En yakın sanayiye uzaklık | Nem | Kükürtdioksit |
|:-------------------------:|:---:|:-------------:|
| 6,30 | 59,10 | 9,20 |
| 6,00 | 75,60 | 9,70 |
| 5,20 | 74,70 | 12,60 |
| 11,10 | 39,10 | 5,30 |
| 12,70 | 70,70 | 5,60 |
| 3,10 | 96,60 | 17,90 |
| 4,60 | 82,50 | 12,70 |
| 6,30 | 59,60 | 13,60 |
| 5,40 | 93,80 | 11,80 |
| 8,10 | 80,50 | 15,30 |

---

## a) Modeldeki bağımlı ve bağımsız değişkenler nelerdir?

**Bağımlı (Y)** = En yakın sanayiye uzaklık, nicel, eşit

**Bağımsız:**
- Nem, nicel, oranlama (x₁)
- Kükürtdioksit, nicel, oranlama (x₂)

---

## b) Modelin tahmin denklemi nedir?

$$Y = \beta_0 + \beta_1 x_{1i} + \beta_2 x_{2i} + \varepsilon_i$$

n = 10

$$\hat{y} = \hat{\beta}_0 + \hat{\beta}_1 x_{1i} + \hat{\beta}_2 x_{2i}$$

**Hesaplamalar:**

$$X'Y = \begin{bmatrix} 68,8 \\ 4759,28 \\ 698,87 \end{bmatrix}$$

$$(X'X)^{-1} = \begin{bmatrix} 2,106529 & -0,0278 & 0,002558 \\ -0,0278 & 0,000696 & -0,00204 \\ 0,002558 & -0,00204 & 0,012911 \end{bmatrix}$$

$$\hat{\beta} = (X'X)^{-1}X'Y = \begin{bmatrix} 14,4026 \\ -0,0236 \\ -0,5090 \end{bmatrix}$$

### Modelin tahmin denklemi:

$$\hat{y} = 14,4026 + (-0,0236) \cdot x_{1i} + (-0,5090) \cdot x_{2i}$$

**Yorum 1:** Nem oranındaki her bir birim artış, en yakın sanayiye olan uzaklığı 0,0236 birim azaltır.

**Yorum 2:** Kükürtdioksit seviyesindeki her bir birim artış, en yakın sanayiye olan uzaklığı 0,5090 birim artırır.

---

## c) Bağımsız değişken bağımlı değişkenlerin yüzde kaçını açıklar?

$$R^2_D = 1 - \frac{AKT/(n-m)}{GKT/(n-1)}$$

$$AKT = Y'Y - \hat{\beta}'X'Y$$
$$GKT = Y'Y - n \cdot \bar{Y}^2$$
$$\bar{Y} = 6,88$$

$$Y'Y = 552,46$$
$$\hat{\beta}'X'Y = 522,3827$$
$$\bar{Y}^2 = 47,3344$$
$$n = 10, \quad m = 3$$

$$AKT = 552,46 - 522,3827 = 30,0773$$
$$GKT = 552,46 - 10 \cdot 47,3344 = 79,116$$

$$R^2_D = 1 - \frac{30,0773/7}{79,116/9} = 0,511214$$

**Yorum:** Nem ve kükürtdioksit, en yakın sanayiye olan uzaklığın %51'ini açıklar.

---

## d) Modelin anlamlılığı için 0.05 önem seviyesinde kararınız ne olur, yorumlayınız?

$$H_0: \beta_1 = \beta_2 = 0$$
$$H_1: \text{En az bir } \beta_j \text{ diğerlerinden farklıdır (j=1,2)}$$

### ANOVA

| KAYNAK | Sd | KT | KO | Test İstatistiği |
|:-------:|:--:|:--:|:--:|:----------------|
| Regresyon | 2 | 49,0387 | 24,5193 | |
| Artık | 7 | 30,0773 | 4,2967 ($\hat{\sigma}^2$) | $F_h = \frac{RKO}{AKO} = \frac{24,5193}{4,2967} = 5,70$ |
| Genel | 9 | 79,116 | | |

$$F_t = F_{m-1;n-m;\alpha} = F_{2;7;0,05} = 4,74$$

**Karar:** $F_h &gt; F_t$ olduğundan $H_0$ ret.

**Yorum:** %95 olasılıkla model anlamlıdır.

---

## e) x₂ bağımsız değişkeninin RKT'de yaptığı artık 0.05 önem seviyesinde anlamlı mıdır?

$$H_0: \beta_2 = 0$$
$$H_1: \beta_2 \neq 0$$

$$\hat{\sigma}^2 (X'X)^{-1} = V(\hat{\beta})$$

$$V(\hat{\beta}_2) = 0,0129 \cdot 4,2967 = 0,0554$$
$$Se(\hat{\beta}_2) = \sqrt{V(\hat{\beta}_2)} = 0,2353$$

$$t_t = t_{n-1;\alpha/2} = t_{9;0,025} = 2,262$$

$$t_h = \frac{-0,5090}{0,2353} = -2,1632$$

**Karar:** $|t_h| &lt; t_t$ olduğundan $H_0$ kabul.

**Yorum:** %95 olasılıkla kükürtdioksitin RKT'de yaptığı artış önemsizdir.

---

## f) x₂ değişkeni için 0,05 anlamlılık düzeyinde kısmi F testini değerlendiriniz.

$$H_0: \beta_1 = 0$$
$$H_1: \beta_1 \neq 0$$

$$F_h = \frac{RKT(\hat{\beta}_1, \hat{\beta}_2) - RKT(\hat{\beta}_2)}{\hat{\sigma}^2}$$

**Kısıtlı model tahmin denklemi:**
$$\hat{y} = 13,4566 + (-0,5784) \cdot x_2$$

$$RKT(\hat{\beta}_2) = 521,5763 - 10 \cdot 47,3344 = 48,2323$$

$$F_h = \frac{49,0387 - 48,2323}{4,2967} = 0,1876$$

$$F_t = F_{1;8;0,05} = 5,32$$

**Karar:** $F_h &lt; F_t$ olduğundan $H_0$ ret edilemez.

**Yorum:** %95 olasılıkla kükürtdioksitin en yakın sanayi bölgesine yakınlık üzerinde anlamlı bir etkisi yoktur.

---

## g) Çoklu korelasyon katsayılarını hesaplayınız.

$$r_{yy} = \frac{\sum(Y_i - \bar{Y}) \cdot (\hat{Y}_i - \bar{Y})}{\sqrt{GKT \cdot RKT}}$$

Tahmin denklemine x₁ ve x₂ değerlerini girerek $\hat{Y}_i$ bulundu:
$$\hat{y} = 14,4026 + (-0,0236) \cdot x_{1i} + (-0,5090) \cdot x_{2i}$$

| Y | Yi-Ȳ | Ŷi-Ȳ | (Yi-Ȳ)·(Ŷi-Ȳ) |
|:--:|:--:|:--:|:--:|
| 8,3250 | -0,58 | 1,445 | -0,8381 |
| 7,6811 | -0,88 | 0,8011 | -0,70497 |
| 6,2263 | -1,68 | -0,6537 | 1,098216 |
| 10,7821 | 4,22 | 3,9021 | 16,46686 |
| 9,8837 | 5,82 | 3,0037 | 17,48153 |
| 3,0117 | -3,78 | -3,8683 | 14,62217 |
| 5,9913 | -2,28 | -0,8887 | 2,026236 |
| 6,0736 | -0,58 | -0,8064 | 0,467712 |
| 6,1827 | -1,48 | -0,6973 | 1,032004 |
| 4,7151 | 1,22 | -2,1649 | -2,64118 |

**Toplam = 49,0104**

$$r_{yy} = \frac{49,0104}{\sqrt{79,116 \cdot 49,0387}} = 0,78684$$

---

## h) Kısım ve kısmi korelasyon katsayılarını inceleyiniz.

### Kısmi Korelasyon

$$r_{Y(x_2.x_1)} = \frac{\sum(Y_i - \bar{Y}) \cdot e_{i(x_2.x_1)}}{\sqrt{\sum(Y_i - \bar{Y})^2 \cdot \sum e^2_{i(x_2.x_1)}}}$$

$$\hat{\beta} = (X_1'X_1)^{-1}X_1'X_2$$

$$e_{i(x_2.x_1)} = X_{2i} - \hat{X}_{2i}$$

**Tahmin denklemi:**
$$\hat{X}_{2i} = -0,19808 + 0,157991 \cdot x_{1i}$$

| X₂ | ei(x₂.x₁) | ei²(x₂.x₁) | (Yi-Ȳ)·ei(x₂.x₁) |
|:--:|:--:|:--:|:--:|
| 9,14 | 0,06 | 0,0036 | -0,0348 |
| 11,75 | -2,05 | 4,2025 | 1,804 |
| 11,60 | 0,99 | 0,9801 | -1,6632 |
| 10,97 | -5,37 | 28,8369 | -31,2534 |
| 15,06 | 2,84 | 8,0656 | -10,7352 |
| 12,84 | -0,14 | 0,0196 | 0,3192 |
| 9,22 | 4,38 | 19,1844 | -2,5404 |
| 12,52 | 2,78 | 7,7284 | 3,3916 |

**Toplam = -39,4082**  
**Toplam(ei²) = 77,4359**

$$r_{Y(x_2.x_1)} = \frac{-39,4082}{\sqrt{77,4359 \cdot 79,116}} = -0,50348$$

**YORUM:** Sanayiye olan yakınlık, kükürtdioksit seviyelerinde belirgin bir artışa neden olurken, nem oranı ile mesafe arasında da anlamlı bir ilişki gözlemlenmiştir. Bu bulgular, sanayi bölgelerinin çevresel koşullar üzerindeki etkisini açıkça ortaya koymaktadır.

### Kısım Korelasyon

$$r_{Yx_2.x_1} = \frac{\sum(e_{i(y.x_1)} \cdot e_{i(x_2.x_1)})}{\sqrt{\sum e^2_{i(y.x_1)} \cdot \sum e^2_{i(x_2.x_1)}}}$$

**Tahmin denklemi:**
$$\hat{y} = 14,5034 + (-0,10412) \cdot x_{1i}$$

| Y | ei(y.x₁) | ei²(y.x₁) | ei(y.x₁)·ei(x₂.x₁) |
|:--:|:--:|:--:|:--:|
| 8,35 | -2,05 | 4,2025 | 23,47332 |
| 6,63 | -0,63 | 0,3969 | 7,980588 |
| 6,73 | -1,53 | 2,3409 | 14,8001 |
| 7,14 | 5,56 | 30,9136 | -90,4423 |
| 4,45 | -1,35 | 1,8225 | 8,976231 |
| 5,91 | -1,31 | 1,7161 | 13,60736 |
| 8,30 | -2 | 4 | 14,20468 |
| 6,12 | 1,98 | 3,9204 | -15,0004 |

**Toplam = 50,1974**  
**Toplam(ei²) = 107,515**

$$r_{Yx_2.x_1} = \frac{-39,5235}{\sqrt{50,1974 \cdot 107,515}} = -0,538$$

**Negatif korelasyon**

---

## i) 0,05 anlam düzeyinde parametrelerin güven aralığını oluşturunuz.

$$Pr\left(\hat{\beta}_j - t_{n-m} \cdot \sqrt{V(\hat{\beta}_j)} &lt; \beta_j &lt; \hat{\beta}_j + t_{n-m} \cdot \sqrt{V(\hat{\beta}_j)}\right) = 1-\alpha$$

$$\hat{\beta} = \begin{bmatrix} 14,4026 \\ -0,0236 \\ -0,5090 \end{bmatrix}, \quad \hat{\sigma}^2 = 4,2967$$

$$\hat{\sigma}^2(X'X)^{-1} = V(\hat{\beta}_j) \text{ olduğundan:}$$

- $V(\hat{\beta}_0) = 4,2967 \cdot 2,106529 = 9,051123$
- $V(\hat{\beta}_1) = 4,2967 \cdot 0,000696 = 0,002991$
- $V(\hat{\beta}_2) = 4,2967 \cdot 0,012911 = 0,055475$

$$t_{n-m} = t_{7;0,05} = 2,365$$

### β̂₀ için güven aralığı:

$$Pr(7,287487 &lt; \hat{\beta}_0 &lt; 21,51771) = 0,95$$

**Yorum:** %95 olasılıkla $\hat{\beta}_0$ tahmin edicisi 7,287487 ile 21,51771 arasında bulunur.

### β̂₁ için güven aralığı:

$$Pr(-0,0236 - 2,365 \cdot \sqrt{0,002991} &lt; \hat{\beta}_1 &lt; -0,0236 + 2,365 \cdot \sqrt{0,002991}) = 0,95$$

$$Pr(-0,15294 &lt; \hat{\beta}_1 &lt; 0,105742) = 0,95$$

**Yorum:** %95 olasılıkla $\hat{\beta}_1$ tahmin edicisi -0,15294 ile 0,105742 arasında bulunur.

### β̂₂ için güven aralığı:

$$Pr(-0,5090 - 2,365 \cdot \sqrt{0,055475} &lt; \hat{\beta}_2 &lt; -0,5090 + 2,365 \cdot \sqrt{0,055475}) = 0,95$$

$$Pr(-1,06603 &lt; \hat{\beta}_2 &lt; 0,048032) = 0,95$$

**Yorum:** %95 olasılıkla $\hat{\beta}_2$ tahmin edicisi -1,06603 ile 0,048032 arasında bulunur.

---

## j) Durbin-Watson testi uygulayınız.

$$DW = \frac{\sum(e_i - e_{i-1})^2}{\sum e^2_i}$$

$$\hat{y} = 14,4026 + (-0,0236) \cdot x_{1i} + (-0,5090) \cdot x_{2i}$$

| y | ei = yi - ŷ | ei-1 | ei - ei-1 | (ei-ei-1)² | e²i |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 8,32624 | -2,02624 | - | -2,02624 | 4,105649 | 4,105649 |
| 7,68186 | -1,68186 | -2,02624 | 0,34438 | 0,118598 | 2,828653 |
| 6,22628 | -1,02628 | -1,68186 | 0,65558 | 0,429785 | 1,053251 |
| 10,78214 | 0,31786 | -1,02628 | 1,34414 | 1,806712 | 0,101035 |
| 9,88268 | 2,81732 | 0,31786 | 2,49946 | 6,2473 | 7,937292 |
| 3,02174 | 0,07826 | 2,81732 | -2,73906 | 7,50245 | 0,006125 |
| 5,9913 | -1,3913 | 0,07826 | -1,46956 | 2,159607 | 1,935716 |
| 6,07284 | 0,22716 | -1,3913 | 1,61846 | 2,619413 | 0,051602 |
| 6,18272 | -0,78272 | 0,22716 | -1,00988 | 1,019858 | 0,612651 |
| -26,90286 | 35,00286 | -0,78272 | 35,78558 | 1280,608 | 1225,2 |

**Toplam = 1306,617**  
**Toplam(e²i) = 1243,832**

$$H_0: \text{Cov}(\varepsilon_i, \varepsilon_j) = 0 \text{ (otokorelasyon yoktur)}$$
$$H_1: \text{Cov}(\varepsilon_i, \varepsilon_j) \neq 0 \text{ (otokorelasyon vardır)}$$

$$DW = \frac{1306,617}{1243,832} = 1,050477$$

**Yorum Kriterleri:**
- $0 \leq DW &lt; 2$: Pozitif otokorelasyon. DW değeri ne kadar küçükse, otokorelasyon o kadar güçlüdür.
- $DW \approx 2$: Hata terimlerinde otokorelasyon yoktur (bağımsızdır).
- $2 &lt; DW \leq 4$: Negatif otokorelasyon. DW değeri 2'den ne kadar uzaksa, otokorelasyon o kadar güçlüdür.

**Yorum:**

DW = 1.05, hataların arasında zayıf pozitif otokorelasyon olduğunu gösterir. Bu durum, modelin bazı varsayımlarının (örneğin, hataların bağımsızlığı) ihlal edilmiş olabileceğini düşündürür.

---

## k) Korelasyon matrisi VIF

$$\bar{x}_1 = 73,22, \quad \bar{x}_2 = 11,37$$

$$A = 2 \times 10, \quad A' = 10 \times 2$$
$$W = AA', \quad W = 2 \times 2$$
$$x_{ij} = X_{ij} - \bar{X}_j$$

$$\vec{x}_1 = 73,22$$

| x₁ - x̄₁ | x₂ - x̄₂ |
|:--:|:--:|
| -14,12 | -2,17 |
| 2,38 | -1,67 |
| 1,48 | 1,23 |
| -34,12 | -6,07 |
| -2,52 | -5,77 |
| 23,38 | 6,53 |
| 9,28 | 1,33 |
| -13,62 | 2,23 |
| 20,58 | 0,43 |
| 7,28 | 3,93 |

$$W = \begin{bmatrix} 2672,536 & 422,236 \\ 422,236 & 144,161 \end{bmatrix}$$

$$Q = \begin{bmatrix} 1/\sqrt{2672,536} & 0 \\ 0 & 1/\sqrt{144,161} \end{bmatrix} = \begin{bmatrix} 0,019344 & 0 \\ 0 & 0,083287 \end{bmatrix}$$

$$R = QWQ = \begin{bmatrix} 1 & 0,680252 \\ 0,680252 & 1 \end{bmatrix}$$

### VIF için:

$$R^2 = 0,680252$$
$$\det(R) = 0,537258$$

$$R^{-1} = \frac{1}{\det(R)} \cdot adj(R) = \frac{1}{0,537258} \cdot \begin{bmatrix} 1 & -0,680252 \\ -0,680252 & 1 \end{bmatrix}$$

$$VIF(X_1) = \frac{1}{1 - 0,680252} = \frac{1}{0,319748} = 3,1275$$

$$VIF(X_2) = \frac{1}{0,53258} = 1,861303$$

**Yorum:**
- $1 &lt; VIF &lt; 5$: Düşük düzeyde çoklu bağlantı vardır. Düzeltmeye gerek yoktur.