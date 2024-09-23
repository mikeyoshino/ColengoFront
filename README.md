# Angular Product Display App

This is an Angular application that displays a list of demo products with the following features:
- **Product Image**: A thumbnail image for each product.
- **Product Title**: The name of the product.
- **Product Price**: The price of the product.
- **Pagination**: Displays products in pages with customizable page size.
- **Sorting**: Sort products by name or created date.
- **Title Search**: Search for products by their title.

## Features

1. **Product Listing**:
   - Each product is displayed with a picture, title, and price.
   
2. **Pagination**:
   - Displays 10 products per page by default, but can be configured.
   - Navigate between pages using pagination controls.

3. **Sorting**:
   - Sort products by title (alphabetically) or by creation date.

4. **Search**:
   - Search products by title using a search bar.
   
## Demo

The app uses a mock API that serves demo product data for display. It is configured to display 10 products per page, allowing users to sort and search through products.

### Screenshot Example

![Product List Screenshot](./screenshot.png) <!-- Add a screenshot here to show a demo -->

## Setup Instructions

### Prerequisites

Before running this application, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+)
- [Angular CLI](https://angular.io/cli) (v12+)
- A Git repository to clone the project.

### Clone the Repository

Clone the repository to your local machine:
```bash
git clone <repository-url>
cd <repository-folder>
