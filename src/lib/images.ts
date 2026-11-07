import type { StaticImageData } from "next/image";

import fourFlavorsBanner from "@/assets/075d097b-f507-4516-ac70-ba683bc6d345.jpg";
import bakedTable from "@/assets/5c12d777-04d7-413c-9b5d-163f6cf5ae74.jpg";
import packagingPoster from "@/assets/69c3e2b1-0aa2-40ac-8f5f-4070839d82e4.jpg";
import menuPosterImage from "@/assets/74b3b052-b459-490d-99d7-c399b6eb064c.jpg";
import labelledTable from "@/assets/77f56695-698e-43a3-818b-118cbbf43e8e.jpg";
import chefTable from "@/assets/79cc1d3a-f0e2-4623-8e9f-18649cd05038.jpg";
import signTable from "@/assets/9cbdce24-c3fb-43e1-8651-340eddb3f421.jpg";
import closeupTable from "@/assets/af0b9f9d-dcc9-4309-9bc6-70fbf017cff1.jpg";
import peanutsPoster from "@/assets/b483e51b-32f4-43a1-bff8-da87f660b2c1.jpg";
import boatTable from "@/assets/dae26f2b-beab-4f01-94d4-f1df8c7fb3fa.jpg";

import buffetTable from "@/assets/crops/buffet-table.jpg";
import californiaMaki from "@/assets/crops/california-maki.jpg";
import cateringRoom from "@/assets/crops/catering-room.jpg";
import chopsticksRoll from "@/assets/crops/chopsticks-roll.jpg";
import crumbedLemon from "@/assets/crops/crumbed-lemon.jpg";
import fourBoxes from "@/assets/crops/four-boxes.jpg";
import giftBox from "@/assets/crops/gift-box.jpg";
import glovedHands from "@/assets/crops/gloved-hands.jpg";
import heroRolls from "@/assets/crops/hero-rolls.jpg";
import kaniCloseup from "@/assets/crops/kani-closeup.jpg";
import kimbapCloseup from "@/assets/crops/kimbap-closeup.jpg";
import mangoNoirKatsu from "@/assets/crops/mango-noir-katsu.jpg";
import menuRolls from "@/assets/crops/menu-rolls.jpg";
import rollLantern from "@/assets/crops/roll-lantern.jpg";
import rollPlate from "@/assets/crops/roll-plate.jpg";
import spamGunkan from "@/assets/crops/spam-gunkan.jpg";

export type Photo = { src: StaticImageData; alt: string };

export const photos = {
  heroRolls: { src: heroRolls, alt: "Sushi rolls with creamy sauce and black roe on a dark stone slab" },
  menuRolls: { src: menuRolls, alt: "Rows of sesame-crusted and glazed sushi rolls" },
  cateringRoom: { src: cateringRoom, alt: "Sushi bar tables lit by lanterns beneath a SLICED. sign" },
  rollLantern: { src: rollLantern, alt: "Sauce-draped sushi rolls beside a paper lantern" },
  rollPlate: { src: rollPlate, alt: "A round platter of assorted glazed and sesame sushi rolls" },
  glovedHands: { src: glovedHands, alt: "Gloved hands garnishing a row of sushi rolls" },
  giftBox: { src: giftBox, alt: "A black SLICED. box with gold brush marks" },
  chopsticksRoll: { src: chopsticksRoll, alt: "Chopsticks lifting a single sauce-covered sushi roll" },
  fourBoxes: { src: fourBoxes, alt: "Boxes of California Maki, Kimbap, Kani Sushi and Spam Volcano Sushi with SLICED. labels" },
  californiaMaki: { src: californiaMaki, alt: "A slate tray of California Maki rolls with a name card" },
  spamGunkan: { src: spamGunkan, alt: "Spam Volcano Gunkan on a stone tray with a name card" },
  mangoNoirKatsu: { src: mangoNoirKatsu, alt: "Black rice rolls topped with mango and floss on a slate tray" },
  kaniCloseup: { src: kaniCloseup, alt: "Rows of Kani Sushi wrapped with bands of seaweed" },
  kimbapCloseup: { src: kimbapCloseup, alt: "Sliced kimbap on a wooden board" },
  buffetTable: { src: buffetTable, alt: "A SLICED. buffet table with bamboo runners in front of a lit display case" },
  crumbedLemon: { src: crumbedLemon, alt: "Crispy sushi bites with creamy topping and lemon in paper boats" },
  fourFlavorsBanner: { src: fourFlavorsBanner, alt: "Four boxed SLICED. sushi selections on a dark table" },
  bakedTable: { src: bakedTable, alt: "A tiered stand and trays of sushi bites at a SLICED. event table" },
  packagingPoster: { src: packagingPoster, alt: "Three SLICED. sushi boxes photographed from above on black" },
  labelledTable: { src: labelledTable, alt: "California Maki, black rice rolls and Spam Volcano Gunkan on bamboo mats" },
  chefTable: { src: chefTable, alt: "A smiling SLICED. chef in black beside a full sushi bar table" },
  signTable: { src: signTable, alt: "A sushi bar table with a SLICED. sign, bamboo and a silver chafing dish" },
  closeupTable: { src: closeupTable, alt: "Trays of Kani Sushi, kimbap and topped sushi bites at an event" },
  boatTable: { src: boatTable, alt: "A wooden sushi boat surrounded by trays of maki and mango-topped bites" },
  peanuts: { src: peanutsPoster, alt: "SLICED. Aromatic Peanuts in bottles: crunchy, flavorful, addictive" },
  menuPoster: { src: menuPosterImage, alt: "The full SLICED. menu poster with regular menu, platters and event packages" },
} satisfies Record<string, Photo>;

export const gallery: Photo[] = [
  photos.boatTable,
  photos.closeupTable,
  photos.signTable,
  photos.chefTable,
  photos.bakedTable,
  photos.fourFlavorsBanner,
  photos.packagingPoster,
  photos.labelledTable,
  photos.buffetTable,
  photos.rollLantern,
  photos.chopsticksRoll,
  photos.giftBox,
];
