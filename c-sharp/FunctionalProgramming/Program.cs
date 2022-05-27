Operation mySum = Functions.Sum;
mySum = Functions.Mul;
// Console.WriteLine(mySum(2, 3));

Show cw = Console.WriteLine;
cw += Functions.ConsoleShow;

// Functions.Some("Juan", "Carlitos", cw);
#region Action
Action<string> showMessage = Console.WriteLine;
Functions.Some("Rob", "Mac", showMessage);
#endregion
#region Delegados
delegate int Operation(int a, int b);
public delegate void Show(string message);
public delegate void Show2(string message, string message2);
#endregion


public class Functions
{
    public static int Sum(int x, int y) => x + y;
    public static int Mul(int x, int y) => x * y;
    public static void ConsoleShow(string m) => Console.WriteLine(m.ToUpper());

    public static void Some(string name, string lastName, Action<string> fn)
    {
        Console.WriteLine("Hago algo al inicio");
        fn($"Hola {name} {lastName}");
        Console.WriteLine("Hago algo al final");

    }

}
