Operation mySum = Functions.Sum;
mySum = Functions.Mul;
Console.WriteLine(mySum(2, 3));

Show show = Functions.ConsoleShow;
show("hola mundo");

delegate int Operation(int a, int b);
delegate void Show(string message);


public class Functions
{
    public static int Sum(int x, int y) => x + y;
    public static int Mul(int x, int y) => x * y;
    public static void ConsoleShow(string m) => Console.WriteLine(m);

}
