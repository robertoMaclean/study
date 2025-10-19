package excepciones;

public class EdadInvalidaException extends Exception{
    public EdadInvalidaException(){
        super("Edad inválida, debe ser un número positivo");
    }

    public EdadInvalidaException(String mensaje){
        super(mensaje);
    }
}
