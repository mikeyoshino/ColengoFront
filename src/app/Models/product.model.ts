import { Price } from './price.model';

export interface Product {
  productId: number;
  name: string;
  title: string;
  thumbnailImage: string;
  price: Price;
  sold: number;
  allowMultipleConfigs: boolean;
  url: string;
  created: Date;
  overallCampaignEndDate: Date | null;
  reviewScore: number;
  reviewCount: number;
  has3DAssets: boolean;
}