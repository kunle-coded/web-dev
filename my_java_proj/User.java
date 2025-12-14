package my_java_proj;

public class User {
    String name;
    String username;
    String password;
    int dateOfBirth;
    boolean isMarried;
    int id;

    public User(int idNum){
        id = idNum;
    }

    // Setters
    public void register(String name_, String username_, String password_, int dob){
        name = name_;
        username = username_;
        password = password_;
        dateOfBirth = dob;
    }

    // Getters
    public String getName(){
        return name;
    }
}
