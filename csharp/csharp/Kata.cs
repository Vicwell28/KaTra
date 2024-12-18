using System.Numerics;

namespace csharp
{
    /// <summary>
    /// Clase <c>Kata</c> que contiene métodos para resolver diversos desafíos de programación.
    /// </summary>
    public class Kata
    {
        /// <summary>
        /// Ordena un arreglo de números enteros de forma ascendente.
        /// Si el arreglo es <c>null</c> o está vacío, retorna un arreglo vacío.
        /// </summary>
        /// <param name="numbers">Arreglo de números enteros a ordenar.</param>
        /// <returns>
        /// Arreglo de números enteros ordenados de forma ascendente.
        /// Retorna un arreglo vacío si la entrada es <c>null</c> o está vacío.
        /// </returns>
        public static int[] SortNumbers(int[] numbers)
        {
            return (numbers == null || numbers.Length == 0)
                ? new int[] { }
                : numbers.OrderBy(n => n).ToArray();
        }

        /// <summary>
        /// Genera una ola mexicana (Mexican Wave) a partir de una cadena de texto.
        /// Cada posición de la cadena que contiene una letra se convierte en mayúscula una a una,
        /// ignorando los espacios.
        /// </summary>
        /// <param name="str">La cadena de entrada en minúsculas.</param>
        /// <returns>
        /// Lista de cadenas donde cada cadena representa una etapa de la ola mexicana con una letra en mayúscula.
        /// </returns>
        public static List<string> Wave(string str) => str
            .Select((c, i) => c != ' ' ? str[..i] + char.ToUpper(c) + str[(i + 1)..] : null)
            .Where(s => s != null)
            .ToList()!;

        /// <summary>
        /// Añade la longitud de cada palabra al final de la misma y retorna un arreglo con los resultados.
        /// </summary>
        /// <param name="str">La cadena de entrada con palabras separadas por espacios.</param>
        /// <returns>Arreglo de cadenas donde cada palabra está seguida de su longitud.</returns>
        public static string[] AddLength(string str) => str
            .Split(' ', StringSplitOptions.RemoveEmptyEntries)
            .Select(p => $"{p} {p.Length}")
            .ToArray();

        /// <summary>
        /// Invierte el orden de las palabras en una cadena de texto.
        /// Las palabras están separadas por un solo espacio y se ignoran espacios innecesarios.
        /// </summary>
        /// <param name="text">La cadena de entrada que contiene las palabras a invertir.</param>
        /// <returns>Una nueva cadena con las palabras en orden inverso.</returns>
        public static string Reverse(string text) => string
            .Join(" ", text
            .Split(' ', StringSplitOptions.RemoveEmptyEntries)
            .Reverse());

        /// <summary>
        /// Calcula la suma de los dígitos de un número entero.
        /// </summary>
        /// <param name="number">El número entero del cual se sumarán los dígitos.</param>
        /// <returns>La suma de los dígitos absolutos del número.</returns>
        public static int SumDigits(int number) => Math.Abs(number)
            .ToString()
            .Sum(c => c - '0');

        /// <summary>
        /// Reemplaza todas las vocales en la cadena de entrada con signos de exclamación ('!').
        /// Las vocales consideradas son 'a', 'e', 'i', 'o', 'u' tanto en minúsculas como en mayúsculas.
        /// </summary>
        /// <param name="str">La cadena de entrada donde se reemplazarán las vocales.</param>
        /// <returns>Una nueva cadena con todas las vocales reemplazadas por '!'.</returns>
        public static string ReplaceVowels(string str) =>
            new string(str.Select(c => "aeiouAEIOU".Contains(c) ? '!' : c).ToArray());

        /// <summary>
        /// Reemplaza todos los caracteres en posiciones pares con un asterisco ('*').
        /// </summary>
        /// <param name="str">La cadena de entrada donde se reemplazarán los caracteres.</param>
        /// <returns>Una nueva cadena con caracteres en posiciones pares reemplazados por '*'.</returns>
        public static string ReplaceAtEvenIndices(string str) =>
            new string(str.Select((c, i) => i % 2 == 0 ? '*' : c).ToArray());

        /// <summary>
        /// Itera sobre una cadena y realiza una acción específica para cada carácter, proporcionando el carácter, su índice y la longitud total de la cadena.
        /// </summary>
        /// <param name="str">La cadena de entrada a iterar.</param>
        /// <returns>Lista de cadenas que representan la información de cada carácter.</returns>
        public static List<string> IterateString(string str) =>
            str.Select((c, i) => $"Carácter: {c}, Índice: {i}, Longitud Total: {str.Length}")
               .ToList();

        /// <summary>
        /// Itera sobre una cadena y realiza una acción específica para cada carácter, proporcionando el carácter, su índice y la longitud total de la cadena.
        /// Este método es similar a IterateString pero utiliza un arreglo de caracteres para mayor eficiencia.
        /// </summary>
        /// <param name="str">La cadena de entrada a iterar.</param>
        /// <returns>Lista de cadenas que representan la información de cada carácter.</returns>
        public static List<string> IterateStringWithArray(string str)
        {
            var array = str.ToCharArray();
            return array.Select((c, i) => $"Carácter: {c}, Índice: {i}, Longitud Total: {array.Length}")
                        .ToList();
        }

        /// <summary>
        /// Encuentra los índices de todas las letras mayúsculas en una cadena dada.
        /// </summary>
        /// <param name="word">Cadena de texto que contiene solo letras ASCII en mayúsculas y minúsculas.</param>
        /// <returns>
        /// Arreglo de enteros que representan los índices de las letras mayúsculas en la cadena.
        /// </returns>
        public static int[] Capitals(string word)
        {
            return word
                .Select((c, index) => new { Char = c, Index = index })
                .Where(x => char.IsUpper(x.Char))
                .Select(x => x.Index)
                .ToArray();
        }

        /// <summary>
        /// Calcula el número de años necesarios para que una inversión inicial alcance o supere una cantidad deseada.
        /// La inversión se incrementa anualmente con una tasa de interés y se aplican impuestos sobre los intereses ganados.
        /// </summary>
        /// <param name="principal">Cantidad inicial de dinero.</param>
        /// <param name="interest">Tasa de interés anual (como decimal, por ejemplo, 0.05 para 5%).</param>
        /// <param name="tax">Tasa de impuestos sobre los intereses ganados cada año (como decimal).</param>
        /// <param name="desiredPrincipal">Cantidad deseada de dinero.</param>
        /// <returns>
        /// Número de años necesarios para alcanzar o superar la cantidad deseada.
        /// </returns>
        public static int CalculateYears(double principal, double interest, double tax, double desiredPrincipal)
        {
            int years = 0;

            while (principal < desiredPrincipal)
            {
                // Calcula los intereses ganados después de impuestos
                principal += principal * interest * (1 - tax);

                // Incrementa el contador de años
                years++;
            }

            return years;
        }

        /// <summary>
        /// Calcula la cantidad entera de litros que se pueden beber dado el tiempo en horas.
        /// Se consume 0.5 litros por hora. El resultado se redondea hacia abajo.
        /// </summary>
        /// <param name="time">Tiempo en horas.</param>
        /// <returns>
        /// Cantidad entera de litros que se pueden beber.
        /// </returns>
        public static int Litres(double time) => (int)(time * 0.5);

        /// <summary>
        /// Determina si un número requiere el uso del plural.
        /// </summary>
        /// <param name="n">Número a evaluar.</param>
        /// <returns>
        /// <c>true</c> si el número no es 1 (requiere plural), de lo contrario, <c>false</c>.
        /// </returns>
        public static bool Plural(double n) => n != 1;

        /// <summary>
        /// Extrae la edad de una cadena de texto que contiene una frase con un número.
        /// </summary>
        /// <param name="inputString">Cadena de texto que contiene una frase con un número.</param>
        /// <returns>
        /// Edad como un número entero.
        /// </returns>
        /// <exception cref="FormatException">
        /// Se lanza si la cadena no contiene un número válido al inicio.
        /// </exception>
        public static int GetAge(string inputString) => int.Parse(inputString.Split(' ')[0]);

        /// <summary>
        /// Calcula la suma de los dígitos de la suma de todos los números consecutivos únicos en un arreglo.
        /// </summary>
        /// <param name="arr">
        /// Arreglo desordenado de números enteros no negativos (incluyendo cero) 
        /// con hasta 50 dígitos. Los números duplicados se consideran solo una vez.
        /// </param>
        /// <returns>
        /// Un entero que representa la suma de los dígitos de la suma total de 
        /// todos los números que forman parte de secuencias consecutivas en el arreglo ordenado.
        /// </returns>
        /// <remarks>
        /// <para>
        /// Este método realiza los siguientes pasos:
        /// <list type="number">
        ///     <item>
        ///         <description>
        ///             Verifica si el arreglo de entrada es <c>null</c> o está vacío. 
        ///             Si es así, retorna 0.
        ///         </description>
        ///     </item>
        ///     <item>
        ///         <description>
        ///             Elimina los números duplicados y ordena el arreglo de forma ascendente.
        ///         </description>
        ///     </item>
        ///     <item>
        ///         <description>
        ///             Identifica los números que forman parte de secuencias consecutivas.
        ///             Un número es considerado consecutivo si está inmediatamente 
        ///             antes o después de otro número en el arreglo ordenado.
        ///         </description>
        ///     </item>
        ///     <item>
        ///         <description>
        ///             Suma todos los números identificados como parte de secuencias consecutivas.
        ///         </description>
        ///     </item>
        ///     <item>
        ///         <description>
        ///             Calcula la suma de los dígitos del total sumado y retorna este valor.
        ///         </description>
        ///     </item>
        /// </list>
        /// </para>
        /// </remarks>
        /// <example>
        /// <code>
        /// BigInteger[] example1 = { 3, 1, 100, 120, 101, 99, 2, 3 };
        /// int result1 = SumConsecutivesSolution.ConsecutiveSum(example1);
        /// // result1 es 9
        ///
        /// BigInteger[] example2 = { 3, 1000, 1005, 1000, 9999999, 1000, 1000, 6, 7, 1003, 1004, 4, 5, 1002, 8, 9, 1001, 1004 };
        /// int result2 = SumConsecutivesSolution.ConsecutiveSum(example2);
        /// // result2 es 18
        /// </code>
        /// </example>
        public static int ConsecutiveSum(BigInteger[] arr)
        {
            // Verifica si el arreglo es null o está vacío
            if (arr == null || arr.Length == 0)
                return 0;

            // Elimina duplicados y ordena el arreglo de forma ascendente
            var sortedUnique = arr.Distinct().OrderBy(x => x).ToList();

            // Identifica los números que forman parte de secuencias consecutivas
            var consecutiveNumbers = sortedUnique
                .Where((num, index) =>
                    (index > 0 && num == sortedUnique[index - 1] + 1) ||
                    (index < sortedUnique.Count - 1 && num + 1 == sortedUnique[index + 1]))
                .Distinct();

            // Suma todos los números identificados como parte de secuencias consecutivas
            BigInteger totalSum = consecutiveNumbers.Aggregate(BigInteger.Zero, (acc, num) => acc + num);

            // Calcula la suma de los dígitos del total sumado y retorna el resultado
            return totalSum.ToString().Sum(c => c - '0');
        }
    }
}
