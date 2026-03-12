import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

class Transport {
    int transportId;
    String name;
    String date;
    String status;

    Transport(int id, String name, String date, String status) {
        this.transportId = id;
        this.name = name;
        this.date = date;
        this.status = status;
    }

    public String toString() {
        return "ID: " + transportId + " Name: " + name + " Date: " + date + " Status: " + status;
    }
}

class TransportService {

    Map<Integer, Transport> database = new HashMap<>();

    void addTransport(Transport t) {
        database.put(t.transportId, t);
        System.out.println("Transport Added Successfully");
    }

    void deleteTransport(int id) {
        if (database.containsKey(id)) {
            database.remove(id);
            System.out.println("Transport Deleted Successfully");
        } else {
            System.out.println("Transport Not Found");
        }
    }

    void display() {
        if (database.isEmpty()) {
            System.out.println("No Transport Records");
        } else {
            for (Transport t : database.values()) {
                System.out.println(t);
            }
        }
    }
}

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        TransportService service = new TransportService();

        while (true) {

            System.out.println("\n1 Add Transport");
            System.out.println("2 Delete Transport");
            System.out.println("3 Display Transport");
            System.out.println("4 Exit");

            System.out.print("Enter Choice: ");
            int choice = sc.nextInt();
            sc.nextLine();

            if (choice == 1) {

                System.out.print("Enter Transport ID: ");
                int id = sc.nextInt();
                sc.nextLine();

                System.out.print("Enter Name: ");
                String name = sc.nextLine();

                System.out.print("Enter Date: ");
                String date = sc.nextLine();

                System.out.print("Enter Status: ");
                String status = sc.nextLine();

                Transport t = new Transport(id, name, date, status);
                service.addTransport(t);

            } else if (choice == 2) {

                System.out.print("Enter Transport ID to delete: ");
                int id = sc.nextInt();
                service.deleteTransport(id);

            } else if (choice == 3) {

                service.display();

            } else if (choice == 4) {

                System.out.println("Program Ended");
                break;

            } else {

                System.out.println("Invalid Choice");

            }
        }

        sc.close();
    }
}
