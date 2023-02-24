import React, { useReducer, useState } from "react";
import reducer from "./reducer";
let initialState = {
  cars: {
    carName: "Nexia",
    price: [26395],
    features: [],
  },

  features: [
    {
      about: "V-6 engine",
      price: 1500,
    },
    {
      about: "Racing detail package",
      price: 1500,
    },
    {
      about: "Rear spoiler",
      price: 250,
    },
    {
      about: "Premium sound system",
      price: 500,
    },
  ],
};
const Buy = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="car">
      <div className="buy">
        <div className="buy-box">
          <img
            src="
        data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFhUYGBgZGBgYGBgYHBocGBkYGRkZGhoYGBocIS4lHB4rIRkYJjgnKy8xNTU1GiU7QDszPy40NTEBDAwMEA8QGhISHjQhISExNDQ0NDQ0NDQxMTQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ1ND00ODQ0MTQ0NDE0PzQxNP/AABEIALgBEgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABIEAACAQIDBAYGBwUGBAcAAAABAgADEQQSIQUxQVEGEyJhcYEyQlKRobEHcoKSwdHwFCNiotIVFkNTsuEzc8LiFyREVMPT8f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAQEBAQEBAQAAAAAAAAERAhIhMVFBAzL/2gAMAwEAAhEDEQA/ANmqR1UilSPIk2htUjq04tUjqpAaVI4EjgSLCSBsJFBI4EiwsBoLFBI6EhhYDQSKCRwLDyxphvLBljuWDLJqm8kFo7lgywGrQWjuWDLAatBaO5YMsBnLAVjuWDLLoZKxOWP5YWWNQwUiSkkFYkrAjlIkpJJWIKwIzJG2SSykSUlENkjTJJrJGmSBEZIyySayRpkgRMkEkZYIEtEjipFqkcVJAlUi1WLVYsLAQFiwsUBFgRqkBYoCKAirSBAEO0XaACAVoLQ7Q4BWgtINfaii+QGoRpZLZb97khdOIBJ7pBqbUrHctNPEs589F+BlxPUXloCJmauLrtvrW+ogX5lpFdWPpVHPjb5hRHln01TYlBvZfC4J9wiGxyDifJW/KY/EEgem5+01vdmkFjfexHiWMs5S9VuW2mg5/AfMxB2unI/eX8DMKzpxZz4XHzMZZ6PJvvH8pfMT1W+O2E5D7w/KJ/tdeQ+9/wBs5/agfVP3m/oilpUfZ/mb+mMh6roH9rLyH3v+2MNt+kHKas4ALKhBKA7i5NlS/DMQTwvMStGlzYd4ZvyEq+pFPEJSpHsN1rtzuGXt343Lcbx5lPVdPbbNIc/hC/tqh6zhfrED8Zia7FVFlao7HKiA2zsBdmdvVRRa577WJIBbGAxNrtXFP+GjSVVHcGqAlvGw8IyE66dFoYpH9B1bwIMcKzmyPUbsh0DowDs6Ah1f/hvZWBS5VlNvWVja1pcYTpBWoWFdbp7aEugF7XbTOnjZlHEgayWNTr+teViCsPCYlKiBkIIIB079eGnmNI6VkaRisQySSViGWBFZI06SWyxtkgRMsEkZIIElVjirFKsUBBggsUBFARQEiiAhgQwIYEAgIYEMCHaQEBBaKlbtHaq0zkUZqhFwl/RG7M59VfieF5f1LUrFYpKa3Y79ABqzHko4mUuJrPV9Pspwpg7/AK7D0vqjs882+MZjfO7ZnOhbdYeyg9Ve7u1uZKw+HO9vd+csjNuk06ZbcLAacgO4AR9cKo4X8Y9CJlFftOqqLlAGZu7W3P8AD3yqpsWYIN7G3+/hx8pXY/a4d3e/ZGi/VH6v4kwdEsW9XEOykZEU578m0ULyNx7gZcY36tMdgXDHKhZeBFjpYbxe9/KZ3FFlBZkdQLasrKBc2GpHMgSz6UdL/wBnc0aSguts7tqqkgEKFG9rEHXQXtrrbF4/pXiqqOjVQUcFWXIgFu4hbjxBlmpbEyrjhzv4SbsSgleqqO5UG/o2uSAbanQbrbjvmAG0WDa7/wAZb7N2kUZHDWKkNflY3B8jr5TVZ11mjsLDr6mbvZmP42+EmU8FSXdTQfZX8ozT2lSZVfrEXMobKzoCt/VNzvG7yjlHG03OVKiObXsrqxsN5sDOf10mBjnSmjvlUZVJHZG/co95ExHR+galerVO5MtJfsjM58yw+7LfpxtMU6Spf0iXP1UH9RHujnRbAdXhEzaM4DP9ao1z/q+E1Gan7Eo3eo5BugSit+9VrOV8WqKp/wCVJe1kBpsSQMvaBPPl57vOYrBbVYXrI+rM7j2WR6jOFNt4CkDymq2jjqL4bO7ZUqJ2L3vntdQLalgR8DfSRpmBiQlZGvYMcjeDkZT4hwngGaaypS6xA6iz21A0DEekLcDxHjObY2rnp6HW1rjgefiDab3o1j+tpo+7rEVyOTgAOv69mWxmVCwmKbCsalME0r/vqXse1UpjhrqyeY1Bvu8NXSoiuhBVhcEaix8JmNqYVgetQXI1dea+2B5G/Py1pOiO2Dh8S+Edv3bNno34I9myDuBOnmOAmbNb5uOjFYgrHokiZdDDLG2WSCsSyyojZYcdyQSh4LFgQARQEyoAQwIAIoCQEBDAhgQ4BCCQdtYw0aLutswAC33ZmIUX7rkTlW2mxDDMTVxDk6hnyoo5lRYAfVHCanOsddeXRNu7dyN1NGz1mFzxWmvtvb4LxlPRsgOpd2N2c6u7HS5/AcJmMPijhqYC0alRyRmyLbMbb9fRUbgNbDnqY1Q6SYlaiv8AsNRrXNi2XgQPU4X+E1OcYvWuh4TDW7T+ly9n/eSyZgX6aYo7sIqd5zuR9kZAffIuL6TYkq1v2hnPogIlJFvb2apY8d548I809R0dmsLnQDUk6ADmTwExvSbpagoutJHZWPV9dayX9YJf0zYEcLXmLr43HOAGFUgEGzOW3cxn1kUYKvcMEckG4vci/g1bKfdL5xPW/gsZtJ1TKVy33EkanXkSBrzIm++j40yjmmwdVpYZGYAj94RVqVNDr6VQjwAmHxCYpwFegGAIO6muo5lHvHcLicdSqtWp0Ajv6eVxlf64fMTc6776nWW/SfEDb2Itiawc2fralwdDq5I38LWt3SAtZN+YHwmkxe1NqVGLEWuLZQaVlHJb0yQPM75UYjYmMqNneirkKqAuxNkQWVRlAGgsITzP6oNpKC2ZdbjXxH6ERQxDrz3WHd3y/HRPFm9qai/Es2n8sCdC8Xx6sD9dwlXIp8PWA5D3Xl3snaPV1EqDXI6tZSATbhfW193nFL0TrA61E+yt/jeTqXRcgEtWN7H0VC8OJN9IY+H8djW2jikRUKoxRCpOayKS9Qkjuz/yzpe2m6vDOw0yo7D7NN2HxAlD0P2GtMBwmU2tc+lbfa/j+tBNDtuiXougO9HXnvpuot5kSVuOPdG8Yf2dU3lSUA+sbgfzETRJsurURFZ2AUHKuUEKGOY27Y3mYrontWnQcNV1UMjhedtfxB8pql+kCmugN7ckP9YlmFl1PpdFauVkDXLXy3SwBI4kM3EDhJexcPicLQq02UJVos7079pGRwWBHNSxdeB04SoT6S8puFY/YUfN5Y0+mlbHG1HCi6ABnqOFU5uHZVr7r2vISfFE/SPEO3WF+1p6IVTYcAQLjlbiNDeNbbxxY0sQmVXDEDKLKGXtrpy1qaS7wfRBjYvUoJ3KlSq3fq7ov8ss6fRDDbqlSrUHs3Smuu+wpoD8YJM/1r+jm20q0Ee5CuoIvqV5g24g3B7wZeo4bUEHwmX2Zh8PQQJTQKoubFmbU6k3cnWWFLaCLqGXwH4gTF51vnrFwREERVKoHUMNxAPvhkTLobywou0EByKAgAigJAIBBK7aG1qdLs3zN7I4fWPD5xiW4spWY7bNOmCSb8NNxPIcz4TO7R24zAlmso9VeJ4KOZJ5/CUD1Wc5m38huUchz8ePwnScf1z6/wCn8W+0dsvW0JsvBRu8W5n5fGQhUkMtEmpN5jnbv6sBUENyrCxvw3Gx0N5XdYYRqHlLiat8690BdOQlR1zQdYYw1aGonIRBqpyEriTDCmME12QgggEEEEcwdCIZqLvkNVMVk5xgliuBA2MA4SExjTA8pDUqpjm4WHxPxkdnLbyT4xeHw7ObDfyGpPgBr8pc4bYTqQ1VbISi2Bs4J0zvbQLcgWBuOMWyNTm1U4bDO5yopY8eQ8TwmhwGwAtmqHMd+UeiPzl3Rw6oAqqFA4DSKaZvTU5w0AALAWkeve3hrbnHqrAekbd3H3CRXxXBELHv0HwuZIVzl/oypl3dsQxQsSiqqghSbqpZiQbCwvYSTT6BYRd6u/ez2/0BZrHrPqCyrruUbr2J1PjIzIDvu3iSZqRL0pk6PYNPRoUiR7Qzn+a8noipYAWBNgFWwv3ASQWA3AQs7X7OTh2nBOUcSljqbcONt4lZ0TuRGi55wVXvvjGaEOM4DLcnU2yhWPIls1iBpeSMKLNvNjmFtLePPiJGWpH6bG6kC4uQTpoe/wCEK2Gw3vRA5Ej43/GWBlbsAfuz9c/ISznLr9d+fyE2ghwSNHRDgEEgrdoYpgci77Zmb2V4Ad5I8reExW08DV7VVG7IBYo29gNbq3Btd3H3AazMrZm0OdjbvUHItu7KCfONYmgQGW5YFSGNhpcEWuB3zXNxnqb8ZKjg2cBuGtvHdf4mTqeypTbb2jVwmEVg6kFioIulTew7TC4Go3qAeVpgz0qre21+F8Rizx/59vI2m705Th19NiAySmwl5TjH966+uqacS+INvHNW+QML+9VcW/4OvMOb++pJ6rXmO2rsJfZPuhnYK+zOJ0+l1cXAXDd/7s38+3Hl6cYgDdh+Xo1APhUB+EeqviOxNsBeUabo+s5J/fvEcqOu4XxA/wBNb52ht06xG6yD6lXFofeK9vjJOqeI6wdgiQsdgkpkAnU62HAd8q+g+3a9ek9QuAq9YH61qtRVCBGDIXbNftkFc5GgIIkLEYqtUZnerYk3ORFW3d2883zbWOpIsa+IRbKAWY+iiC7m2824DvJAkzDbKquAxCIDwJzvbnoQB5xvAYI0lzal6o7TtvVVFlQW3Aakgc78Zq8BSCoEvlNra3JOlrsLyddfxeeZ/qg/spFNndzpw7I4HgBz4RWE2dSqaBBcEhr3axF/aJ32tw3iW1DKUbN6YZraWFxusFvodOP5SKldEzudAct9LC3Pz7PjfvmL1W5Ii4DOjOUy0yujDIvaAJ4gbvzl/i64ahcelUQKgIPpuOzcb9N57lPKZajiELs6qyZiezfW2hLHN6I0F76Aay5wVTrCtVBeki5KKnQstrNUF91wLLfhrpeI1cn4t2FuN402sZ/aVYhQ2p4HRvunWSnFhaVnUOpREratQowYHduvu3EWI8CZJxu0UUlR2jxtuHiecrXxAfuPKakc7f4jVq5Z2J4m/vjZeMu1mPl+MS1SaYPFo2XjReJzQHGaNEwi/wCv14Rt27oC0bXwEkYbFqrZW9bfyF915FDWQk/oD/czmm0Nuu+IDoxCq1qYvpl5sOJbf5jlFq8y16I2A91ZeRB/D8Ja2lD0OfPRV/bRG+8L2M0Fpyv678f+YTaCKtBMtFyo6S7QNKicvpuci91wbt5D4kS3mN6d1rNRAP8AmN/oA/Gak2s9XIqtmbWemArozqBlV01IG7toSL6DeLk+zLJts0HQgvlfKbK7EHMAbaOFb/8AJU4bFe0Ae8aGT1Wm4yta3JhcfiJ0vMcp3WO+kUs2Gw6qCQe0bfXJ/Gc0yNfUcvzP61noTAqMiroct11AO4kaX4aR84dD6ifdX8pm8tc9fHnVabadluHA+PL8oYov7D6j2WvqdeH5z0JicLTCM3UoxVWYLlGthe1++1pDSlQZhlo0rWJIK3buJ103H3905f8ATucTa6cy9fjhQwtT/Lc7z6DeXD8IX7K+7I/3W5eHznoHDUMM7ELQpi2ugH4SV+wUP8pPdNc2dTYluXK84vQf2HGnFWG/4RSYdyfRbeB6LcPL5Xno9cNTG5FHlD/ZaZ3onmoPzEuJ6YPZynDbOp0rZXqscwO8BWLPe3J2yeCSKgZ3pUkPaeoovyVTmZjyFh8Zo8fsx8ViGylUo0rUgxsBddXVFFtzEjgBbutJtPo/hUtmVHI9ZwHb5WHgLTpPkxzv26cTH01DCpkVkbKM7pYra91XN2ju58OIicHtRANA9Q30ypUtpyJ099vheSDVpIOylvqqqj4SsxW1iPRQfaJPytJOdW9YmHFuAclNhf23VV9yZj8Bulc/7S5t1qLchrJTUnMDoQ9S488sp8btaq2gfKOSgD47/jH9iVTmuSSeZNz7zL5jPqtJgdhoDnqk1nOv7wl1B55dFJ+zYS2epIlGrpCepIqbhjckndukXa2KSmhOiaElr5QqgXZiRyEVRq2E579IO17suHXUuMzj+AEhF82DE/V5GBk+kXTWq7lcO7U6Q0DDR3/iJ3qDyHneTehXSuq1UUazl83oM2rBhrlJ4g675mcbSp3K6BhvyLoPG2krqLNSqK3FGVgR3EEEd0ztldMlmR2/E1O3fmAffGtTGne+Ujio+ZI+YiDfnOzgkG3FoRqLwBPjGQIcBTVjw08I0TFW/X68YAt5kQtvVGFEImr1WSkg3XLnX4En7MyHSjYLYcISwbW2YG4uGsynQag2+PIzb02U43DKxsFzuPrNajT/AJqokvp9hc+COgzIQdB/EF1Pg3wmLfrrzMjZ9BR/5Kk3tLceFzaaKZL6MapbZmHJ3jrF8lrOoHkFA8pq7zHX66SZMKgiYJFKBmE6ev8AvqQ5Uyfe3+03F5hPpGpNnoMiFmcOgA/hs9zqNLFjv4TXPys9zeVLh3k/DtM89PHU/TwjH6pzN91M2nfeNL0lKELVw9VDyK6nwA1M67Hn82HumG2quGFI0my5zUDelwYkWAIHH4TP0+nmLHrqfEP/AFyX04rCrh6NRQbdY66ixF1YkEcDcTFrM39dJ+Nkn0hYkcEP2W/rjh+kKsSC1NCRxs4OmvB5i8sPKZM0jdf+JNb/AC09zfi8SfpIrewn3T/XMNaC0Dbt9I2I4Kg+yT/1yd0X6aYjEViHyimil2IW1wAzEG5NtFPGc5M1XQCgBSrOdM5Snc+yxF/gH95ifpfyum7NYpSQN6RGd/ruS7/zMYdSteVWM2xST03yjgSCAfA2le/SfDf5yeU3jGrivVlZiW0kGp0nwn+b7lJ/GRKnSfBcXqHwU/lGplKrHWT9lNYyobpBgeJrjvy6fKXOyXo1QWoVQ9vSQjK6+IOvwEaZWmoVNI8XkGi2kdZtIalOvW0Pfp75x/aGPNXE1qy63cpTAudBZEA7zYG38U6Lt7G9Vhq1S9iqNb6xGVf5mWc96D0OsxVBcpYK3WFRvIRS3DvAma1z/Wt2PsXDBTQF2dVYvUVuyaisFdRY+rc6m/omwItOfdKNnGjUKkegcvirXKnu3N53nUNi9Hnwz1SAf2bM7U2YgsEZabFW1v2bOtzvyGZ/6UsDqlQD06bZj3oysPgzzLp+LrDD93T+on+kR4JDwtjTRlVipRCDYKLFQRqxAOh4ExRzdw+rdvictj96dY85OWEbbr68uPu3xYok7/ifwWw+cm4fZNVh2Ua3fZF+Nr+QMUy1Xk9x89Ph6Xwi6ebMNBzAt+e8eQlnj9g11oVXV0Vkpu6KilrsqFgC7cCRwXznGqm1675iar9rflJF7jiRqZPUa81u+jWLWrtPNYuFRwlrHVKtGzm/q3UsSOG6bjpbhwcHidxPVljuuSNTp7pyHotWdcTTyEqzsUBUgWzWIHgcoXznWekuIBR1t2XZaSnTVqlSnTtbxYnlpOddYu+h2y2wuCoUHtmRSXANwGdmdwDxszEeUurxLNrDvMtlQQrwRgRmlR0kZFo9Y3+Gc44n0SrWG82VibDlJ+eZ3pVhajhHRS+UOroNSyNlINuNrEW75ZGer8VlXppgaCB1qNUYqE7PaK25jSwHAb/cZRY7pthKyMhqMpOgzIdN+86i0cfB4Un97RKN/EhH4G3ugHR3BPoGseWe38txN+XL0zmHwb4nAGknadKhZbakgMScvM5WvMRXwdSmbNmUjQ6m3vnYk2XRw62pud97EHfzzE9w3Xi3OfR0Sp9dAx+9v+MtmnPWfHFVDe23vMVlb2295v8An8J12psDCvq2GW/Ncwt4XvIb9CME24VV7swI926Y8109Ry3te03v/Q98TdvaPv8A0J1an0KwS2JSo9ubkD4GT8PsDBJouDpnve7nzzXvHmnrlxoZybAknkLk+7fOmbG2eaOFpowszEuw46jQH3k+c09OkiCyUqaDkiKo91odbY1WuAyOgAvmLNdtea/mRNczGOut+RicTRSriadNz2FW7C9hZjY2N9D6J8ppP7J2egACUj/FnUnxNyYxiugb1HLmsLkAad3LKfnG1+jVz/j/AOuLNJciyw2EwTMUK4YKwCjJ1edeyLONPSBv43N5e7P2bRptlyoMpDg6aqbg2PrKfmLTIH6OsupxOXzI+Yi22FkGQY+uBrpTa2p5AESeV9NjtHB02UdqwCtrruJHAHtEe7f58/6S7GNBUxlB1V0azZBZbFgqMV3BWJCld2oIA7UfOyb/APqdov8AbAHyMcpdGMOxDPRqs3tPVs3vVQYynqLHo/tpcSge2V9zryYb/KWdZ9JC2fsmhRbOlEBr3OZncE8yCbEyzbGuNBZPqKq/EC82wxv0hYnLhAo/xKir5Ldz8VWZvobijQd6ygkooFgNbO9ND3euZO+kvFZno073IDu3HViFUn7rRroHhOtd6Wl6iWBIFly1EYsARqbKbD4jfMX9rfP5HYXFN6d3awAJdVOhFRXpZb8ASSe4qN0xX0oov7PTyq6gMyrmXLf93Vzdk6jctvHum/o0VpKq00G8h8xBJGRyBc7+2yj7R8ZhfpLw9T9nw9N3z1GZySdNeqcW8ASJGlpsjY5ejRYlVBpUiLnWxRdwH+0ucPsmgnpuWPK4Ufn8Zz2jtF1VUDmyqqjXgoAHyiXxlT2j75r6mR1GniMPT9EIvfpm951hVNuUh66zklavUPrH4yI9Ks3EyYuut1ek1EDVgRx5W5TgW0cKKVZ6am6qzBDrql7ob/VPvvL4bKrPxaJboVUcglmBMYbqmwTlSCDYqysp5MhBUj4Gb3Zm3Di8ThkZcq036+txDPTuUA5AuVNjrp3aw9ldALWLM5+1b5Te7E6PU6Q7KgczxPmdZFkaWjiQ+oklWkOmoXQR4NIp+8EazQRiofWQGpIgqQw8qJBfz7junEulOFxGFxLotaoEJLpZ21RiWUDXgM6/YM7Nnmf6WbMp4inZ9GW5RxvW9rjvU2GncITHENouzC7MzEHeSSSDqNT+tJDpYjgdORG8ePOW+19m1KTEWDDXVTvHgdRKJqR5GDIsBi2Xc5A7mb8DNd9H2xauPquXq1Uw9Mdp0dwxY+iikki/rHQ2A7xMNQo69rd3b5ttn9M6lCmtKiiIijRQOe8knUk7yTH2nmR0U/R1S4Y/GD7aH/pjT9BEXdtLFDxZT8iJhH6a4pvX9wjf94q7b3MZU+fxs63RLLu2pX81J/8AkEh/2RUpsGXabkjUZ6Zb51DMq+1Krb3MaONf2jNfUyNpXxuI/wDdUj40n/8AujdPauVT1ro7X0KJlFrbiGLEm9+MxjYp+ZjbVjzlTI19TbqDcq/dX8oy3SYjcE+6PymQasYhqpgyNf8A3pqc1+6IzW6T1zudR9lZlkqR5GB4wZFy/SDEn/EI8FX8pQbV25iVe3X1LEAjW3Eg7rcpNS3OQdtYXOmZdSlz4qd/u3++S1ZIp6lZnbMzFmO8k3O7Tf5TTdCMb1WJptewz5TfdZwUJPcMwPlMijfr9frSWODOvju5X7/1wmVsd1we1kes6o+fKChtewdFqM+u6+Ym9uQlF0/xXW4ujTX1KLVG8ahQDzsL/alNsvphQRQ9SlmroCC4YKHNsv74X9LmbNc6i14fR2nUxD1MVUuTVaym1rqL3YDgCTYdyCIVIw2CJ4SzobIJ4S9wOze6XNHCgcJbSRmaHR/ullh9goOAl6ABCLyauK5NkIOAkhMAo4R/rDAXhRLh1EdFo0akSakgfzQi8jmpEmpAk54JF6yCBXLVihUlctWLWpNYmrAPIePwzONDCFSOLVkw2MhtHow73lFW6G1fZnTushh4McnbolWHqGF/dyqPUPunXBUEO45CDHI12E49Qx1NjP7JnViieyIOpT2RLp5cwTY7+zHBsdvZnS+pT2RB1CeyI08uZnYrco22w25GdQ/Zqfswv2SmeEaeXN16OXQkjtm5XfuHd75Ebo+ShIHaDa79Qe6dVOGS+7doPC1ogYGnrpHo8uWYXo+crM63AsALka+Xl74+mxVIY9URlt6za7++dMbA07Wtp+J/QhrgqYB032/GTTHLk2EztcIURRdhcm54AE/rSBtiO/ZVCh9Vrk+8TqSYSmBa3K/xj1OjTG5RoI0xxmj0PfKzPTzNm0ALDlyMV/cyv2Wp9gHerXNtd4nZSFsNB7o2VHKFYrCdCEe3WqjGwuQGuSBzLfhNngNmpTUBVAtYAcANwAjwexhmpp7oTEtHAGkHX6XkQVPn+vxiOs0hUs1T3QjU0kVamsT1unnAlmpp7oRqeHxkQ1NP13xAq7/D8RAmGpEtUkM1YVSrJibExqnyESaml9Pj+ciO5JA7h8o3UrcOAjDUvrYJB6yCXE9KxasWtWCCaDi1otasEEIWKsWKsEEKUKkWKkEEiDFSAVYcEKHWw+tgghNH1sMVrQQQouth9dBBAHWwddBBALrYZrnnBBALroOtgggD9oPOJNbvgggF1sLrYIIANfviOu4QQQE9dC6+0EEBJrxIxJHGCCAg4k77wji25wQQG+uggglH/9k="
            alt="Car"
          />
          <p>{state.cars.carName}</p>
          <p>Amount: ${state.cars.price}</p>
          <p>Added features:</p>
          <ul>
            <li>
              {state.cars.features.length ? (
                state.cars.features.map((el, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        dispatch({ type: "delSettings", payload: el })
                      }
                    >
                      X
                    </button>
                    <span>{el.about}</span>
                  </li>
                ))
              ) : (
                <span>You can purchase items from the store.</span>
              )}
            </li>
          </ul>
        </div>
        <div className="buy-info">
          <h3 className="buy-info__title">Additional Features</h3>
          <ul>
            {state.features.length ? (
              state.features.map((el, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      dispatch({ type: "addSettings", payload: el })
                    }
                  >
                    Add
                  </button>
                  <span>
                    {el.about} ${el.price}
                  </span>
                </li>
              ))
            ) : (
              <p>Nice locking car</p>
            )}
          </ul>
          <h3 className="buy-info__total">Total Amount: ${state.cars.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default Buy;
