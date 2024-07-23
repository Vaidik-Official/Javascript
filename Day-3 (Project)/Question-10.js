#include <stdio.h>

int main() {
    // Prompt user for base salary and percentages
    printf("Enter the base salary: ");
    scanf("%f", &   baseSalary);

    printf("Enter the percentage of HRA: ");
    scanf("%f", &hraPercent);

    printf("Enter the percentage of DA: ");
    scanf("%f", &daPercent);

    printf("Enter the percentage of TA: ");
    scanf("%f", &taPercent);

    // Calculate HRA, DA, and TA amounts
    hraAmount = (hraPercent / 100) * baseSalary;
    daAmount = (daPercent / 100) * baseSalary;
    taAmount = (taPercent / 100) * baseSalary;

    // Calculate gross salary
    grossSalary = baseSalary + hraAmount + daAmount + taAmount;

    // Display result
    printf("Gross Salary: Rs. %.2f\n", grossSalary);

    return 0;
}
